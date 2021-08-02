import React from "react";

import { View, Animated, Image, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

const CARD_WIDTH: number = width * 0.8;
const CARD_HEIGHT: number = height * 0.7;

interface UserI {
  id: number;
  name: string;
  image: any;
}

const Card: React.FC<{ item: UserI; scrollX: any; index: number }> = ({
  item,
  scrollX,
  index,
}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-width * 0.7, 0, width * 0.7],
  });

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width,
        height,
        flex: 1,
      }}
    >
      <View
        style={{
          borderRadius: 17,
          shadowColor: "#000",
          shadowOpacity: 1,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 19,
          padding: 12,
          elevation: 5, // Android
        }}
      >
        <View
          style={{
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            overflow: "hidden",
            borderRadius: 17,
            alignItems: "center",
          }}
        >
          <Animated.Image
            source={{ uri: Image.resolveAssetSource(item.image).uri }}
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              resizeMode: "cover",
              transform: [
                {
                  translateX: translateX,
                },
              ],
            }}
          />
        </View>
        <Image
          source={{ uri: Image.resolveAssetSource(item.image).uri }}
          style={{
            width: 60,
            height: 60,
            resizeMode: "cover",
            borderRadius: 60,
            position: "absolute",
            bottom: -30,
            right: 60,
            borderColor: "white",
            borderWidth: 6,
          }}
        />
      </View>
    </View>
  );
};

export default Card;
