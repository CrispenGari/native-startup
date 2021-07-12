import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import { Text, Image } from "react-native-elements";
import { EvilIcons } from "@expo/vector-icons";
const WindCard: React.FC = () => {
  const current = useSelector((state: any) => state.current);
  const locationName = useSelector((state: any) => state.locationName);
  if (!locationName) {
    return <ActivityIndicator color="lightblue" size="large" />;
  }
  console.log(current);
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

      <Image
        style={{
          width: 40,
          height: 40,
        }}
        source={{
          uri: `http://openweathermap.org/img/w/${current?.weather[0]?.icon}.png`,
        }}
        PlaceholderContent={
          <ActivityIndicator color="lightblue" size="small" />
        }
      />
      <Text
        style={{
          color: "white",
          fontWeight: "500",
        }}
      >
        {current?.weather[0]?.main}
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
        {current?.main.temp?.toFixed(0)}°c
      </Text>
      <Text
        style={{
          color: "white",
          fontWeight: "500",
          textShadowColor: "black",
          fontSize: 16,
        }}
      >
        {current?.weather[0]?.description}
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
    // backgroundColor: "rgba(0, 0, 0, .5)",
    alignItems: "center",
  },
  weather__card__location: {},
});
