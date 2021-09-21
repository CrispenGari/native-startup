import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main__image: {
    width: Dimensions.get("screen").width * 0.95,
    height: Dimensions.get("screen").height * 0.65,
    resizeMode: "contain",
  },
  main__text1: {
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "lightseagreen",
  },
  main__text2: {
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 2,
    textTransform: "none",
    color: "lightseagreen",
    textAlign: "center",
  },
  main__controls: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width * 0.95,
    marginTop: 10,
  },
  main__open: {
    width: Dimensions.get("screen").width * 0.8,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 30,
    flex: 1,
  },
  main__controltext: {
    fontWeight: "500",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "lightseagreen",
  },
});
export default styles;
