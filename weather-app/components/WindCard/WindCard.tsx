import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { Text } from "react-native-elements";
import { EvilIcons } from "@expo/vector-icons";
import helperFunctions from "../../utils/helperFunctions";
const WindCard: React.FC = () => {
  const current = useSelector((state: any) => state.current);
  const locationName = useSelector((state: any) => state.locationName);
  if (!locationName) {
    return <ActivityIndicator color="lightblue" size="large" />;
  }
  return (
    <View style={styles.weather__card}>
      <View style={styles.weather__card__location}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EvilIcons name="location" size={40} color="red" />
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: 50,
            }}
          >
            {locationName[0]?.city}
          </Text>
        </View>

        <Text style={{ color: "white", textAlign: "center" }}>{`${
          locationName[0]?.country
        }, ${locationName[0]?.isoCountryCode?.toLowerCase()}`}</Text>
      </View>
      <Text
        style={{
          color: "white",
          fontWeight: "500",
          textShadowColor: "black",
          textShadowRadius: 30,
          marginBottom: -15,
          marginTop: 15,
        }}
      >
        WIND DIRECTION
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 80,
          fontWeight: "500",
          textShadowColor: "black",
          textShadowRadius: 30,
        }}
      >
        {helperFunctions.findWindDirection(current?.wind?.deg)}
      </Text>
      <Text
        style={{
          color: "white",
          fontWeight: "800",
          textShadowColor: "black",
        }}
      >
        WIND SPEED
      </Text>
      <Text
        style={{
          color: "white",
          fontWeight: "800",
          textShadowColor: "black",
          fontSize: 20,
        }}
      >
        {current?.wind?.speed} m/s
      </Text>
    </View>
  );
};

export default WindCard;

const styles = StyleSheet.create({
  weather__card: {
    borderRadius: 5,
    padding: 10,
    width: "95%",
    height: "80%",
    alignItems: "center",
  },
  weather__card__location: {},
});
