import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { DOG_IMAGE } from "../../assets/images";
import { Button } from "../Common";
const Landing = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        width: "100%",
      }}
    >
      <StatusBar animated barStyle="light-content" />
      <ImageBackground
        style={{
          width: "100%",
          maxHeight: "70%",
          height: "100%",
          flex: 1,
        }}
        source={{ uri: Image.resolveAssetSource(DOG_IMAGE).uri }}
      >
        {/* Linear Gradient component */}
        <LinearGradient
          colors={["black", "rgba(0, 0, 0, .3)"]}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            height: 100,
            padding: 20,
          }}
          start={{
            x: 0,
            y: 1,
          }}
          end={{
            x: 0,
            y: 0,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 35,
            }}
          >
            Cute Dogs Gallery
          </Text>
        </LinearGradient>
      </ImageBackground>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "gray",
            maxWidth: "70%",
            padding: 20,
            lineHeight: 15,
            alignSelf: "flex-start",
          }}
        >
          You want to buy a new cute dog? With us you will never go wrong. Click
          browse to see what we have for you!!
        </Text>
        <Button
          onPress={() => console.log("Cute dogs")}
          title={"Browse"}
          containerStyles={{
            width: 200,
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "lightblue",
            justifyContent: "center",
            padding: 10,
            borderRadius: 5,
          }}
        />
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({});
