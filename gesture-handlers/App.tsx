// import "react-native-gesture-handler";
import React from "react";
import { Text, View, Animated } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const App = () => {
  const [scale, setScale] = React.useState<number>(1);
  const gesture = Gesture.Rotation()
    .enabled(true)
    .onStart((e) => {
      console.clear();
      console.log(e);
    });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={{
            width: 300,
            height: 200,
            backgroundColor: "cornflowerblue",
            borderRadius: 5,
            margin: 20,
            position: "relative",
            transform: [{ scale }],
          }}
        ></Animated.View>
      </GestureDetector>
    </View>
  );
};

export default App;
