import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import SlidingUpPanel from "rn-sliding-up-panel";
const { width, height } = Dimensions.get("screen");
import Map from "./components/Map";
const App: React.FC = () => {
  let _panel: any = React.useRef();
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <SlidingUpPanel
        ref={(c) => (_panel = c)}
        showBackdrop={false}
        friction={0.7}
        height={height + 120}
        draggableRange={{
          top: height,
          bottom: height,
        }}
        containerStyle={{
          flex: 1,
        }}
        snappingPoints={[height + 120]}
      >
        <View style={styles.container}>
          <Text style={{ color: "white" }}>Hello</Text>
        </View>
      </SlidingUpPanel>
      <TouchableOpacity
        onPress={() => _panel.show()}
        style={{
          flexDirection: "row",
          position: "absolute",
          width: "100%",
          left: 0,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          top: height - 100,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          Swipe Up
        </Text>
        <EvilIcons name="chevron-up" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
