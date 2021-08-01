import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const Slider: React.FC<any> = ({ item }) => {
  return (
    <View
      style={{
        width,
        height,
      }}
    >
      <Image
        style={{
          flex: 1,
          resizeMode: "cover",
          width,
          height,
        }}
        source={{ uri: Image.resolveAssetSource(item.image).uri }}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});
