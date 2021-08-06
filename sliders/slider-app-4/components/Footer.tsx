import React from "react";
import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";

interface UserI {
  id: number;
  name: string;
  image: any;
}
type ItemType = UserI;
const AnimatedText = Animated.createAnimatedComponent(Text);
const { width } = Dimensions.get("screen");

const Footer: React.FC<{ data: ItemType[]; scrollX: any }> = ({
  data,
  scrollX,
}) => {
  return (
    <View
      style={{
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        width,
        height: 50,
        alignItems: "center",
        padding: 10,
      }}
    >
      {data?.map((player: any, index: number) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const translateY = scrollX.interpolate({
          inputRange,
          outputRange: [-50, 0, 50],
        });
        return (
          <AnimatedText
            key={player.id.toString()}
            style={{
              color: "white",
              position: "absolute",
              transform: [{ translateY }],
              fontSize: 20,
              alignItems: "center",
              textTransform: "uppercase",
            }}
          >
            {player.name}
          </AnimatedText>
        );
      })}
    </View>
  );
};
export default Footer;

const styles = StyleSheet.create({});
