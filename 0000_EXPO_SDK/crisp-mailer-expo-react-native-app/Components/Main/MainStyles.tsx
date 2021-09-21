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
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 2,
    textTransform: "none",
    color: "lightseagreen",
    textAlign: "center",
    marginBottom: 100,
    padding: 5,
  },
  main__text2: {
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 2,
    textTransform: "none",
    color: "gray",
    textAlign: "center",
    marginVertical: 20,
  },
  main__controls: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("screen").width * 0.95,
    marginTop: 10,
  },
  main__open: {
    width: 200,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 30,
  },
  main__controltext: {
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "gray",
    textAlign: "center",
  },
});
export default styles;
