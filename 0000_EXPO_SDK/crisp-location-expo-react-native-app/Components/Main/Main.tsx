import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import * as Location from "expo-location";
import styles from "./MainStyles";
const Main = () => {
  const [address, setAddress] = useState("East London");
  const [googleMaps, setGoogleMaps] = useState(false);
  const [location, setLocation] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [lastPosition, setLastPosition] = useState(null);
  const [providerStatus, setProviderStatus] = useState(null);
  const [headings, setHeadings] = useState(null);
  const [reverseGeoCode, setReverseGeoCode] = useState({});
  const [city, setCity] = useState("");
  const [geocode, setGeocode] = useState({});
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  useEffect(() => {
    (async () => {
      const _ = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: _?.coords.latitude,
        longitude: _?.coords.longitude,
      });
    })();
  }, []);
  const location_object = {
    ADDRESS: address,
    USE_GOOGLE_MAPS: googleMaps,
    LOCATION: location,
  };
  const decodeGeoCode = async () => {
    if (city) {
      const _ = await Location.geocodeAsync(city);
      const data_ = {
        accuracy: _[0]?.accuracy,
        altitude: _[0]?.altitude,
        altitudeAccuracy: _[0]?.altitudeAccuracy,
        heading: _[0]?.heading,
        latitude: _[0]?.latitude,
        longitude: _[0]?.longitude,
        speed: _[0]?.speed,
        city: city,
      };
      setGeocode(data_);
    }
  };
  const reverseGeoCodeHandler = async () => {
    if (lat && long) {
      const _ = await Location.reverseGeocodeAsync({
        latitude: Number(lat),
        longitude: Number(long),
      });
      setReverseGeoCode(_[0]);
    }
  };
  const reverseGeoCodeHandlerCurrent = async () => {
    const _ = await Location.reverseGeocodeAsync(location);
    setReverseGeoCode(_[0]);
  };
  console.log(reverseGeoCode);
  useEffect(() => {
    (async () => {
      const permission = await Location.getPermissionsAsync();
      if (permission.granted) {
        const _ = await Location.getCurrentPositionAsync({});
        setCurrentPosition(_);
        const __ = await Location.getLastKnownPositionAsync({});
        setLastPosition(__);
        const ___ = await Location.getProviderStatusAsync();
        setProviderStatus(___);
        const ____ = await Location.getHeadingAsync();
        setHeadings(____);
      } else {
        await Location.requestPermissionsAsync();
      }
    })();
  }, []);

  return (
    <ScrollView style={styles.main}>
      <View style={styles.main__container}>
        <Text style={styles.main__text1}></Text>
        {!location && (
          <Image
            style={{ width: 100, height: 100, marginVertical: 150 }}
            source={{ uri: "https://i.gifer.com/ZZ5H.gif" }}
          />
        )}
        <Text style={styles.main__text0}>Location Decoders</Text>

        <View style={styles.main__card}>
          <Text style={styles.main__text1}>Geo Code</Text>
          <View style={styles.main__row}>
            <TextInput
              style={styles.main__input}
              placeholder="Search Location"
              value={city}
              onChangeText={(text) => setCity(text)}
            />
            <TouchableOpacity
              style={styles.main__search}
              onPress={decodeGeoCode}
            >
              <Text style={styles.main__controltext}>decode</Text>
            </TouchableOpacity>
          </View>
        </View>
        {Object.keys(geocode).length !== 0 && (
          <View style={styles.main__card}>
            <Text style={styles.main__text1}>Geo Code of {geocode?.city}</Text>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>altitude</Text>
              <Text style={styles.main__text3}>{geocode?.altitude}</Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>latitude</Text>
              <Text style={styles.main__text3}>{geocode?.latitude}</Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>longitude</Text>
              <Text style={styles.main__text3}>{geocode?.longitude}</Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>speed</Text>
              <Text style={styles.main__text3}>{String(geocode?.speed)}</Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>accuracy</Text>
              <Text style={styles.main__text3}>{geocode?.accuracy}</Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>heading</Text>
              <Text style={styles.main__text3}>{geocode?.heading}</Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>altitudeAccuracy</Text>
              <Text style={styles.main__text3}>
                {geocode?.altitudeAccuracy}
              </Text>
            </View>
          </View>
        )}
        <View style={styles.main__card}>
          <Text style={styles.main__text1}>REVERSE GEO CODE</Text>
          <View style={styles.main__row}>
            <TextInput
              value={lat}
              style={styles.main__input}
              placeholder="Latitude"
              onChangeText={(text) => setLat(text)}
            />
            <TouchableOpacity
              style={styles.main__search}
              onPress={() => setLat("")}
            >
              <Text style={styles.main__controltext}>Clear</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.main__row}>
            <TextInput
              style={styles.main__input}
              placeholder="Longitude"
              value={long}
              onChangeText={(text) => setLong(text)}
            />
            <TouchableOpacity
              style={styles.main__search}
              onPress={() => setLong("")}
            >
              <Text style={styles.main__controltext}>clear</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.main__row}>
            <TouchableOpacity
              style={styles.main__search}
              onPress={reverseGeoCodeHandler}
            >
              <Text style={styles.main__controltext}>decode</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.main__search}
              onPress={reverseGeoCodeHandlerCurrent}
            >
              <Text style={styles.main__controltext}>Current</Text>
            </TouchableOpacity>
          </View>
        </View>
        {Object.keys(reverseGeoCode).length !== 0 && (
          <View style={styles.main__card}>
            <Text style={styles.main__text1}>
              Reverse Geo Location Detected
            </Text>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>city</Text>
              <Text style={styles.main__text3}>{reverseGeoCode?.city}</Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>country</Text>
              <Text style={styles.main__text3}>{reverseGeoCode?.country}</Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>district</Text>
              <Text style={styles.main__text3}>{reverseGeoCode?.district}</Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>isoCountryCode</Text>
              <Text style={styles.main__text3}>
                {String(reverseGeoCode?.isoCountryCode)}
              </Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>name</Text>
              <Text style={styles.main__text3}>{reverseGeoCode?.name}</Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>postalCode</Text>
              <Text style={styles.main__text3}>
                {reverseGeoCode?.postalCode}
              </Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>region</Text>
              <Text style={styles.main__text3}>{reverseGeoCode?.region}</Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>street</Text>
              <Text style={styles.main__text3}>{reverseGeoCode?.street}</Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>subregion</Text>
              <Text style={styles.main__text3}>
                {reverseGeoCode?.subregion}
              </Text>
            </View>
            <View style={styles.main__row}>
              <Text style={styles.main__text2}>timezone</Text>
              <Text style={styles.main__text3}>{reverseGeoCode?.timezone}</Text>
            </View>
          </View>
        )}
        <Text style={styles.main__text0}>Your Current Location</Text>
        <View style={styles.main__card}>
          <Text style={styles.main__text1}>Current Position</Text>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>altitude</Text>
            <Text style={styles.main__text3}>
              {currentPosition?.coords.altitude}
            </Text>
          </View>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>latitude</Text>
            <Text style={styles.main__text3}>
              {currentPosition?.coords.latitude}
            </Text>
          </View>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>longitude</Text>
            <Text style={styles.main__text3}>
              {currentPosition?.coords.longitude}
            </Text>
          </View>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>mocked</Text>
            <Text style={styles.main__text3}>
              {String(currentPosition?.mocked)}
            </Text>
          </View>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>timestamp</Text>
            <Text style={styles.main__text3}>{currentPosition?.timestamp}</Text>
          </View>
        </View>
        <View style={styles.main__card}>
          <Text style={styles.main__text1}>LastPosition Position</Text>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>altitude</Text>
            <Text style={styles.main__text3}>
              {lastPosition?.coords.altitude}
            </Text>
          </View>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>latitude</Text>
            <Text style={styles.main__text3}>
              {lastPosition?.coords.latitude}
            </Text>
          </View>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>longitude</Text>
            <Text style={styles.main__text3}>
              {lastPosition?.coords.longitude}
            </Text>
          </View>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>mocked</Text>
            <Text style={styles.main__text3}>
              {String(lastPosition?.mocked)}
            </Text>
          </View>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>timestamp</Text>
            <Text style={styles.main__text3}>{lastPosition?.timestamp}</Text>
          </View>
        </View>
        <View style={styles.main__card}>
          <Text style={styles.main__text1}>Provider Status</Text>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>Background Mode Enabled</Text>
            <Text style={styles.main__text3}>
              {String(providerStatus?.backgroundModeEnabled)}
            </Text>
          </View>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>GPS Available</Text>
            <Text style={styles.main__text3}>
              {String(providerStatus?.gpsAvailable)}
            </Text>
          </View>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>location Services Enabled</Text>
            <Text style={styles.main__text3}>
              {String(providerStatus?.locationServicesEnabled)}
            </Text>
          </View>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>network Available</Text>
            <Text style={styles.main__text3}>
              {String(providerStatus?.networkAvailable)}
            </Text>
          </View>
          <View style={styles.main__row}>
            <Text style={styles.main__text2}>passive Available</Text>
            <Text style={styles.main__text3}>
              {String(providerStatus?.passiveAvailable)}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Main;
