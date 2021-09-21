import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  stopwatch: {
    flex: 1,
  },
  stopwatch__footer: {
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("screen").width,
  },
});
