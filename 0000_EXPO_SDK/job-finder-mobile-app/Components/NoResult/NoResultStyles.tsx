import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  noResult: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("screen").height * 0.25,
    maxHeight: 150,
    borderRadius: 5,
    marginVertical: 10,
  },
  noResult__404: {
    display: "flex",
    flexDirection: "row",
  },
  noResult__text: {
    color: "gray",
    marginVertical: 10,
  },
});
export default styles;
