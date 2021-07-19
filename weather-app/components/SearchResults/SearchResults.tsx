import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Text, Image } from "react-native-elements";
import { EvilIcons } from "@expo/vector-icons";
import helperFunctions from "../../utils/helperFunctions";

import { useSelector } from "react-redux";

const SearchResults: React.FC<any> = () => {
  const searched = useSelector((state: any) => state.searched);

  if (!searched) {
    return <></>;
  }
  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
            {searched?.name}
          </Text>
        </View>
        <Text style={{ color: "white", textAlign: "center" }}>
          Current weather in {searched?.name}
        </Text>
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={{
            uri: `http://openweathermap.org/img/w/${searched?.weather[0]?.icon}.png`,
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
          {searched?.weather[0]?.main}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            textShadowColor: "black",
            textShadowRadius: 30,
          }}
        >
          {searched?.main.temp?.toFixed(0)}°c
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "500",
            textShadowColor: "black",
            fontSize: 16,
          }}
        >
          {searched?.weather[0]?.description}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            textShadowColor: "black",
            textShadowRadius: 30,
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          WIND SUMMARY
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            textShadowColor: "black",
            textShadowRadius: 30,
          }}
        >
          {helperFunctions.findWindDirection(searched?.wind?.deg)}
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "800",
            textShadowColor: "black",
            fontSize: 20,
          }}
        >
          {searched?.wind?.speed} m/s
        </Text>
      </View>
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
