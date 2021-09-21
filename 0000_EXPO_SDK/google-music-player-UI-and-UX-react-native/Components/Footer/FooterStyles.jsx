import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
export const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    opacity: 0.9,
    width: width,
    borderWidth: 1,
    borderTopColor: "lightgray",
  },
  footer__controls: {
    paddingHorizontal: 5,
    paddingBottom: 10,
    paddingTop: 0,
  },
  footer__controlsTimes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer__controlsTime: {
    color: "gray",
  },
  footer__controlsButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer__controlsPlayPause: {
    backgroundColor: "#F45730",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
