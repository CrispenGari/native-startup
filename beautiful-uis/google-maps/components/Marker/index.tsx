import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Circle, Marker, Callout } from "react-native-maps";

interface Location {
  latitudeDelta: number;
  longitudeDelta: number;
  latitude: number;
  longitude: number;
}

interface Props {
  pin: Location;
  setPin?: any;
  circle?: boolean;
}
const M: React.FC<Props> = ({ pin, setPin, circle }) => {
  return (
    <Marker
      coordinate={pin}
      pinColor="black"
      draggable={true}
      onDragStart={(e) => {
        console.log("Drag start", e.nativeEvent.coordinate);
      }}
      onDragEnd={(e) => {
        console.log(
          "dragend",
          setPin({
            latitude: e.nativeEvent?.coordinate?.latitude,
            longitude: e.nativeEvent?.coordinate?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          })
        );
      }}
    >
      <Callout>
        <Text>Location</Text>
      </Callout>
      {circle && <Circle center={pin} radius={1000} />}
    </Marker>
  );
};

export default M;

const styles = StyleSheet.create({});
