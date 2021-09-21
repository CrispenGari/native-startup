import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
    paddingTop: 0,
    paddingBottom: 10,
  },
  screen__refresh: {
    color: "lightseagreen",
  },
  screen__controls: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 10,
    marginBottom: 5,
    paddingBottom: 5,
  },
  screen__controls__switch: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  screen__text1: {
    color: "gray",
    width: "100%",
    textAlign: "center",
    fontSize: 15,
    marginBottom: 5,
  },
  screen__text2: {
    color: "gray",
    textAlign: "right",
    fontSize: 15,
  },
});

export default styles;
