import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
export const styles = StyleSheet.create({
  musiclist: {
    flex: 1,
    zIndex: 0,
    backgroundColor: "red",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  musiclist__buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 2,
    width: width,
    paddingHorizontal: 25,
    position: "absolute",
    top: 0.72 * height,
  },
});
