### React Native Maps

In this one we are going to implement the UI that will allow us to search on a map.

First we need to install the following packages.

```shell
npx expo install react-native-maps
#
npm i react-native-google-places-autocomplete
```

Then:

1. Get [ Google Places API](https://console.cloud.google.com/welcome?pli=1&project=mindful-coder-318315) keys.
2. Create a new Project.
3. Under API and services search and enable:
   1. `Places API`
   2. `Geocoding API`
4. Go to the `Credentials` tab and click `Create credentials`
5. Click on the `API Key` and go to the `API restrictions` to restrict API Key on the selected services which are
   1. `Places API`
   2. `Geocoding API`
6. Get the API Key and put it in the `.env` file with name `EXPO_PUBLIC_GOOGLE_MAPS_API_KEY`

```tsx
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const useLocation = () => {
  const [location, setLocation] =
    React.useState<null | Location.LocationObject>(null);
  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        setLoading(false);
        return;
      }
      const location = await Location.getCurrentPositionAsync({}).finally(() =>
        setLoading(false)
      );
      setLocation(location);
    })();
  }, []);

  return { location, error, loading };
};

const Page = () => {
  const { location } = useLocation();
  const [pin, setPin] = React.useState({
    latitude: -33.01529,
    longitude: 27.91162,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  React.useEffect(() => {
    setPin((state) => ({
      ...state,
      latitude: location?.coords.latitude || state.latitude,
      longitude: location?.coords?.longitude ?? state.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }));
  }, [location]);

  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
          language: "en",
          components: "country:za",
          types: "establishment",
          radius: 30000,
          location: `${pin.latitude}, ${-pin.longitude}`,
        }}
        styles={{
          container: {
            flex: 0,
            zIndex: 1,
          },
          //   listView: { backgroundColor: "white", height: "100%" },
        }}
        onFail={(err) => console.log({ err })}
      />

      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        region={pin}
        showsUserLocation={true}
        initialRegion={pin}
        zoomControlEnabled
      >
        <Marker coordinate={pin} />
      </MapView>

      <View
        style={{ position: "absolute", bottom: 0, width: "100%", padding: 30 }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "red",
            padding: 16,
            alignItems: "center",
            borderRadius: 5,
            height: 55,
          }}
        >
          <Text style={{ color: "white", fontWeight: "800", fontSize: 20 }}>
            GO
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;
```

### Refs

1. https://docs.expo.dev/versions/latest/sdk/map-view/
2. https://github.com/fullstackProDev/react-native-google-places-autocomplete
