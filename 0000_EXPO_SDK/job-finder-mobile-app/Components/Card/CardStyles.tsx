import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  card__logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  card__company: {
    flexDirection: "row",
  },
  card__company__appliction: {
    backgroundColor: "#f5f5f5",
    width: "100%",
    borderRadius: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 400,
    height: 170,
    marginVertical: 5,
  },
  card__texth3: {
    color: "gray",
    fontSize: 10,
    fontWeight: "700",
  },
  card__button: {
    backgroundColor: "green",
    width: "100%",
    maxWidth: 90,
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 20,
  },
  card__company__info: {
    marginLeft: 10,
  },
  card__textbutton: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
  card__texth1: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
    overflow: "visible",
  },
  card__texth2: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  card__company__badges: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  card__textbadge1: {
    backgroundColor: "lightseagreen",
    color: "white",
    marginVertical: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 999,
    marginRight: 5,
  },
  card__textbadge2: {
    backgroundColor: "green",
    color: "white",
    marginVertical: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
});

export default styles;
