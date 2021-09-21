import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  picker: {
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "lightgray",
    alignItems: "center",
    flex: 1,
  },
  picker__text: {
    fontWeight: "800",
    fontSize: 20,
  },
  picker__right: {},
  picker__pickerC: {
    width: Dimensions.get("screen").width,
    paddingRight: 15,
    marginBottom: 100,
  },
  picker__pickerLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    borderBottomWidth: 0.6,
    borderBottomColor: "lightgray",
    paddingBottom: 5,
  },
  picker__pickerLabelsText: {
    color: "gray",
    fontSize: 12,
  },
  picker__pickers: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  picker__picker: {
    width: 100,
    height: 60,
    color: "#4B98A3",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
