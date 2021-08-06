import React from "react";
import { StyleSheet, View, Animated, Dimensions, Platform } from "react-native";
const { width } = Dimensions.get("screen");
const BlurBanner: React.FC<{
  scrollX: any;
  data: { id: number; name: string; image: any }[];
}> = ({ scrollX, data }) => {
  return (
    <View style={[StyleSheet.absoluteFillObject]}>
      {data.map(
        (
          item: {
            id: number;
            name: string;
            image: any;
          },
          index: number
        ) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1.3, 1, 1.3],
          });
          return (
            <Animated.Image
              key={index.toString()}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  resizeMode: "cover",
                  opacity,
                  transform: [{ scale }],
                },
                {
                  shadowColor: "black",
                  shadowRadius: 16,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 1,
                },
              ]}
              source={item.image}
              blurRadius={5}
            />
          );
        }
      )}
    </View>
  );
};
export default BlurBanner;
