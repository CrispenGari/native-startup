import React from "react";
import { View, Animated } from "react-native";

const Animations: React.FC<{ theme: "dark" | "light" }> = ({ theme }) => {
  const skeletonAnimation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(skeletonAnimation, {
        toValue: 1,
        delay: 0,
        duration: 2000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const translateX = skeletonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-500, 500],
  });
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
      }}
    >
      <Animated.View
        style={{
          backgroundColor:
            theme === "light"
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(255, 255, 255, 0.05)",
          width: "30%",
          height: 2000,
          transform: [{ rotate: "10deg" }, { translateX }],
          position: "absolute",
        }}
      />
    </View>
  );
};

export default Animations;
