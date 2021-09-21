import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

//import { data } from "./countries";
const renderListItem = (item) => {
  return (
    <TouchableHighlight
      underlayColor="#fbd42c"
      key={`searchlist${item.id}`}
      onPress={() => {}}
    >
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );
};
import SuggestionSearchList from "react-native-search-suggestion";
function SearchBar() {
  const [searchList, setSearchList] = useState([
    {
      id: "1",
      name: "Coca Cola Light",
    },
    {
      id: "2",
      name: "Coca Cola Zero",
    },
    {
      id: "3",
      name: "Fanta",
    },
  ]);
  return (
    <SuggestionSearchList
      list={searchList}
      renderListItem={(item) => renderListItem(item)}
      startSuggestingFrom={1}
      inputStyle={{
        height: 50,
        borderColor: "#f2f2f2",
        borderWidth: 1,
        paddingLeft: 10,
        backgroundColor: "#fff",
      }}
      suggestBoxStyle={{
        backgroundColor: "#fff",
        marginTop: 10,
      }}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 15,
  },
  searchInput: {
    height: 50,
    borderColor: "#f2f2f2",
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  listItem: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    height: 55,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#e5e5e5",
  },
  listItemText: {
    fontSize: 20,
  },
});
export default SearchBar;
