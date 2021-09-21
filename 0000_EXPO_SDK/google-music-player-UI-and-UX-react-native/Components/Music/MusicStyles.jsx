import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  music: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc'
  },
  music__left: {


  },
  music__center: { flex: 1, marginHorizontal: 15, flexDirection: "row" },
  music__right: {

  },
  music__centerInfo: {
    marginLeft: 15
  },
  music__centerInfoName: {
    fontWeight: "700"
    , fontSize: 16
  },
  music__centerInfoAtist: {
    fontWeight: "100"
    , fontSize: 12
    , color: 'gray',
    marginTop: 10
  },

  music__centerImage: {
    width: 50, height: 50
  },

});
