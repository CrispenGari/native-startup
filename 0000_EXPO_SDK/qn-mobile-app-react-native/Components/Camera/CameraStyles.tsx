import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: Dimensions.get("screen").width,
    justifyContent: "center",
    resizeMode: "contain",
  },
  camera__camera: {
    flex: 1,
  },
  camera__question: {
    backgroundColor: "green",
    width: Dimensions.get("screen").width * 0.7,
    position: "absolute",
    top: 30,
    left: Dimensions.get("screen").width * 0.15,
    borderRadius: 5,
    padding: 20,
    opacity: 0.6,
  },
  camera__question__text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  buttons__container__top: {
    padding: 10,
  },
  buttons__container__bottom: {
    position: "absolute",
    bottom: 0,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: Dimensions.get("screen").width,
    flexDirection: "row",
  },
  button: {},
});

export default styles;
