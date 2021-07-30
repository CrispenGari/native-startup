import React from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useLocation } from "./hooks";
import { Marker } from "./components";

const App = () => {
  const [markers, setMarkers] = React.useState<any>([]);
  const { error, loading, location } = useLocation();
  const [pin, setPin] = React.useState({
    latitude: location?.coords?.latitude,
    longitude: location?.coords?.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  React.useEffect(() => {
    setPin({
      latitude: location?.coords?.latitude,
      longitude: location?.coords?.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }, [location]);

  if (error) {
    alert(error);
  }
  if (loading) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color="lightseagreen" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {pin?.latitude && (
        <MapView
          initialRegion={pin}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          onPress={(e) =>
            setMarkers([
              {
                latitude: e.nativeEvent.coordinate?.latitude,
                longitude: e.nativeEvent.coordinate?.longitude,
              },
            ])
          }
        >
          {markers?.map((marker: any, index: number) => (
            <Marker pin={marker} key={index} />
          ))}
          <Marker pin={pin} setPin={setPin} />
        </MapView>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    position: "relative",
  },
  map: {
    flex: 1,
    width: "100%",
  },
});
