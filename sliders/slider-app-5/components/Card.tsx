import React from "react";
import { StyleSheet, View, Dimensions, Image, Animated } from "react-native";
const { width, height } = Dimensions.get("screen");

const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = height * 0.7;

const Card: React.FC<{
  item: { id: number; name: string; image: any };
  index: number;
  scrollX: any;
}> = ({ item, index, scrollX }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [1.3, 1, 1.3],
  });
  return (
    <View
      style={{
        width,
        alignItems: "center",
      }}
    >
      <Animated.Image
        style={{
          width: ITEM_WIDTH,
          height: ITEM_HEIGHT,
          borderRadius: 16,
          resizeMode: "cover",
          transform: [{ scale }],
        }}
        source={item.image}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
