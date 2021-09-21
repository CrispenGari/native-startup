import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  temp: {
    width: Dimensions.get("screen").width,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  temp__description: {
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  temp__text1: {
    color: "white",
    fontSize: 80,
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowRadius: 30,
  },
  temp__text3: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    marginVertical: 10,
  },
  temp__text2: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  temp__text6: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
    textShadowColor: "black",
    textShadowRadius: 30,
  },
  temp__text: {
    color: "white",
  },
  temp__icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  temp__hourly__container: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    flex: 1,
    width: "100%",
    height: 400,
    maxHeight: Dimensions.get("screen").width * 9,
    flexWrap: "wrap",
  },
  temp__hourly__container__wrapper: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  temp__hourly: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "rgba(0,255,0,.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  temp__icon__hourly: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  temp__text4: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowRadius: 30,
  },
  temp__text5: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowRadius: 30,
  },
});

export default styles;
