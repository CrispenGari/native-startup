import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  footer: {
    flex: 1,

    borderWidth: 0.8,
    borderColor: "lightgray",
  },
  footer__btn: {
    flex: 1,
    flexGrow: 1,
    width: Dimensions.get("screen").width,
    textAlign: "center",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  footer__btnText: {
    fontWeight: "bold",
    color: "#4B98A3",
    fontSize: 16,
  },
});
