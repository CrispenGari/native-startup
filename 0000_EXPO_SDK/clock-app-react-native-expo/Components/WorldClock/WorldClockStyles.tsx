import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  worldclock: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: "lightgray",
    paddingVertical: 17,
  },
  worldclock__text: {
    fontWeight: "800",
    fontSize: 12,
    color: "gray",
  },
  worldclock__right: {
    flexDirection: "row",
    alignItems: "center",
  },
  worldclock__left: {
    alignItems: "flex-start",
  },
  worldclock__textLocation: {
    fontWeight: "800",
    fontSize: 20,
  },
  worldclock__rightTemp: {
    alignItems: "center",
    marginLeft: 10,
  },
  worldclock__textTime: {
    fontWeight: "800",
    fontSize: 25,
  },
  worldclock__textIcon: {},
  worldclock__textTemp: {
    fontWeight: "800",
    fontSize: 12,
    color: "gray",
  },
});
