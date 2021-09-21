import { Dimensions, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  weather: {
    width: `100%`,
    maxHeight: Dimensions.get("screen").height * 0.8,
    padding: 10,
  },
  weather__text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  weather__text__location: {
    color: "white",
    textAlign: "center",
    marginVertical: 5,
  },
  weather__location: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});
export default styles;
