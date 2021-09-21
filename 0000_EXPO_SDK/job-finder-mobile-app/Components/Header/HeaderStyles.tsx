import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("screen").width,
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 1,
    marginTop: 20,
    flexDirection: "row",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  header__text: {
    color: "white",
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  header__left: {
    flexDirection: "row",
    alignItems: "center",
  },
  header__right: {
    flexDirection: "row",
    alignItems: "center",
  },
  header__button: {
    margin: 5,
  },
});

export default styles;
