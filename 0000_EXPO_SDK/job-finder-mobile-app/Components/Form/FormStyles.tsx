import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  form: {
    padding: 10,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "white",
    marginTop: 0,
  },
  form__input: {
    marginVertical: 8,
    backgroundColor: "#f5f5f5",
    width: "100%",
    padding: 8,
    borderTopLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  form__texth1: {
    color: "gray",
    textAlign: "center",
    fontWeight: "bold",
  },
  form__controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  form__button: {
    backgroundColor: "black",
    borderRadius: 5,
    width: 70,
    padding: 8,
  },
  form__button__text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  form__checkbox: {},
});
export default styles;
