import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

import * as Location from "expo-location";
import Header from "../components/Header";
import mapStyles from "../utils/mapstyles";
const { width, height } = Dimensions.get("screen");

interface LocationI {
  latitude: number;
  longitude: number;
}
type LocationType = LocationI;

const Map: React.FC<any> = ({ _panel }) => {
  const [location, setLocation] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentLocation, setCurrentLocation] = useState<LocationType | any>();

  const [selectedLocation, setSelectedLocation] = useState<
    LocationType | any
  >();

  const [selectedReversedLocation, setSelectedReversedLocation] =
    useState<any>();
  const [currentReversedLocation, setCurrentReversedLocation] = useState<any>();

  React.useEffect(() => {
    let mounted: boolean = true;
    (async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (granted && mounted) {
        const { coords } = await Location.getCurrentPositionAsync();
        setLocation(coords);
        const { latitude, longitude } = coords;
        setCurrentLocation({
          latitude,
          longitude,
        });
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);
  React.useEffect(() => {
    let mounted: boolean = true;
    (async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (granted && mounted && currentLocation) {
        const reversed = await Location.reverseGeocodeAsync(currentLocation);
        setCurrentReversedLocation(reversed[0]);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [currentLocation]);
  React.useEffect(() => {
    let mounted: boolean = true;
    (async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (granted && mounted && selectedLocation) {
        const reversed = await Location.reverseGeocodeAsync(selectedLocation);
        setSelectedReversedLocation(reversed[0]);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [selectedLocation]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="lightseagreen" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Header cityName={selectedReversedLocation?.name} _panel={_panel} />
      <MapView
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        style={{
          width,
          height,
        }}
        onPress={(event) => {
          setSelectedLocation(event.nativeEvent.coordinate);
        }}
        customMapStyle={mapStyles}
      >
        <Marker
          coordinate={{
            latitude: currentLocation?.latitude,
            longitude: currentLocation.longitude,
          }}
        >
          <Callout>
            <Text>{currentReversedLocation?.name}</Text>
          </Callout>
        </Marker>
        {Boolean(selectedLocation) ? (
          <Marker
            draggable
            onDragEnd={(event) => {
              setSelectedLocation(event.nativeEvent.coordinate);
            }}
            coordinate={{
              latitude: selectedLocation?.latitude,
              longitude: selectedLocation?.longitude,
            }}
          >
            <Callout>
              <Text>{selectedReversedLocation?.name}</Text>
            </Callout>
          </Marker>
        ) : null}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
