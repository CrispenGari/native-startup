import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  timer: {
    flex: 1,
  },
  timer__footer: {
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("screen").width,
  },
});
