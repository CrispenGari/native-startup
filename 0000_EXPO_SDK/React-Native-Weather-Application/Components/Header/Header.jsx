import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons, AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
let global = "";
function Header({ sendData }) {
  const [search, setSearch] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  // const [global, setGlobal] = React.useState("");
  const searchHandler = () => {
    // setGlobal(searchTerm);
    (global = searchTerm), setSearchTerm("");
    setSearch(false);
  };
  return (
    <View>
      {search ? (
        <View style={style.header}>
          <View>
            <TouchableOpacity onPress={() => setSearch(false)}>
              <Ionicons name="md-arrow-back" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View style={style.headViewSearch}>
            <TextInput
              style={style.headerTextInput}
              onChangeText={(text) => setSearchTerm(text)}
              value={searchTerm}
              placeholder="Search a place..."
            />
            <TouchableOpacity onPress={searchHandler}>
              <Ionicons name="md-search" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={style.header}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={sendData}>
              <MaterialIcons name="refresh" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={style.header_text}>Location</Text>
          <TouchableOpacity onPress={() => setSearch(true)}>
            <AntDesign
              name="search1"
              size={24}
              color="white"
              style={style.header_icons}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo
              name="dots-three-vertical"
              size={24}
              color="white"
              style={style.header_icons}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#688EC4",
    marginVertical: 0,
    borderBottomColor: "black",
    marginBottom: 5,
  },
  header_icons: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 10,
  },
  header_text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 10,
  },
  headViewSearch: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    marginLeft: 8,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingRight: 10,
  },
  headerTextInput: {
    padding: 0,
    flex: 1,
    height: 35,
    marginRight: 5,
  },
});

export { global };
export default Header;
