import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
const { width, height } = Dimensions.get("screen");
const VISIBLE_ITEMS: number = 3;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = height * 0.76;

const Card: React.FC<any> = ({ item, scrollXAnimated, index }) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [40, 0, -90],
  });
  const scale = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [0.8, 1, 1.3],
  });
  const opacity = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        left: -ITEM_WIDTH / 2,
        shadowColor: "black",
        borderRadius: 14,
        shadowOffset: {
          height: 0,
          width: 0,
        },
        shadowRadius: 0,
        elevation: 10,
        shadowOpacity: 1,
        opacity,
        transform: [
          {
            translateX,
          },
          { scale },
        ],
      }}
    >
      <Image
        style={{
          width: ITEM_WIDTH,
          height: ITEM_HEIGHT,
          borderRadius: 14,
          resizeMode: "cover",
        }}
        source={{ uri: Image.resolveAssetSource(item.image).uri }}
      />
    </Animated.View>
  );
};

export default Card;

const styles = StyleSheet.create({});
