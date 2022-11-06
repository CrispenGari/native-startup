import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, Text, Image } from "react-native";

const App = () => {
  return (
    <ImageBackground
      source={{
        uri: Image.resolveAssetSource(require("./assets/image.jpg")).uri,
      }}
    >
      <Text>Hello React Native</Text>
    </ImageBackground>
  );
};
export default () => <App />;
