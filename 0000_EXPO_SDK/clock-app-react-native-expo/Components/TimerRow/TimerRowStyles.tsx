import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  timerrow: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: "lightgray",
  },
  timerrow__text: {
    fontWeight: "800",
    fontSize: 20,
  },
  timerrow__right: {
    flexDirection: "row",
    alignItems: "center",
  },
  timerrow__text_days: {
    fontWeight: "600",
    fontSize: 15,
    marginHorizontal: 5,
    color: "#4B98A3",
  },
  timerrow__switch: {
    marginLeft: 10,
    fontSize: 20,
  },
});
