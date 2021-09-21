import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mail: {
    flex: 1,
    paddingVertical: 5,
  },
  mail__container: {
    width: Dimensions.get("screen").width,
    justifyContent: "center",
    alignItems: "center",
  },
  mail__text1: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  mail__main: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: "lightseagreen",
  },
  mail__text2: {
    textAlign: "center",
    color: "gray",
    padding: 5,
  },
  mail__input1: {
    width: Dimensions.get("screen").width * 0.95,
    maxWidth: 500,
    backgroundColor: "#fafafa",
    height: Dimensions.get("screen").width * 0.2,
    padding: 5,
    borderBottomLeftRadius: 5,
    marginVertical: 10,
  },
  mail__controls: {
    width: Dimensions.get("screen").width * 0.95,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  mail__button: {
    width: Dimensions.get("screen").width * 0.5,
    backgroundColor: "green",
    textAlign: "center",
    height: 30,
    justifyContent: "center",
    borderRadius: 5,
  },
});

export default styles;
