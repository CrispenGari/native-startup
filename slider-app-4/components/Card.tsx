import React from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";
interface UserI {
  id: number;
  name: string;
  image: any;
}
type ItemType = UserI;

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = height * 0.6;
const Card: React.FC<{ item: ItemType }> = ({ item }) => {
  return (
    <View
      style={{
        width,
        alignItems: "center",
      }}
    >
      <Animated.Image
        source={item.image}
        style={{
          width: ITEM_WIDTH,
          height: ITEM_HEIGHT,
          resizeMode: "cover",
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
