import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Animated, View, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

const BANNER_HEIGHT = height * 0.7;
interface UserI {
  id: number;
  name: string;
  image: any;
}
type ItemType = UserI;

const Banner: React.FC<{ data: ItemType[]; scrollX: any }> = ({
  data,
  scrollX,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: "white",
          position: "absolute",
          width,
          height: BANNER_HEIGHT,
        },
      ]}
    >
      {data.map((item: ItemType, index: number) => {
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
            source={item.image}
            key={index.toString()}
            style={{
              width: "100%",
              height: BANNER_HEIGHT,
              position: "absolute",
              transform: [{ scale }],
              opacity,
            }}
          />
        );
      })}
      <LinearGradient
        colors={["black", "rgba(0, 0, 0, .3)"]}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        start={{
          x: 1,
          y: 1,
        }}
        end={{
          x: 1,
          y: 0,
        }}
      ></LinearGradient>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
