import React from "react";
import { Dimensions, Animated } from "react-native";

import data from "../assets/images";
const { width } = Dimensions.get("screen");

const Indicator: React.FC<any> = ({ measures, scrollX }) => {
  const inputRange = data.map((_: any, index: number) => index * width);

  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(({ width }: any) => width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(({ x }: any) => x),
  });

  return (
    <Animated.View
      style={{
        width: indicatorWidth,
        backgroundColor: "white",
        position: "absolute",
        bottom: -8,
        height: 4,
        left: 0,
        transform: [
          {
            translateX,
          },
        ],
      }}
    />
  );
};

export default Indicator;
