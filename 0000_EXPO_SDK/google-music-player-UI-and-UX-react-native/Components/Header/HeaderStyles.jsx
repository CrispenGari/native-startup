import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    position: "absolute",
    top: 20,
    width: Dimensions.get("screen").width,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  header__left: {
    backgroundColor: "#E5E3E6",
    padding: 10,
  },
  header__center: { flex: 1, marginHorizontal: 20 },
  header__right: {
    borderBottomColor: "lightgray",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header__centerMusicname: {
    fontWeight: "700",
    fontSize: 18,
  },
  header__centerArtistname: {
    fontWeight: "500",
    color: "gray",
  },
  header__rightBtns: {
    marginHorizontal: 5,
  },
});
