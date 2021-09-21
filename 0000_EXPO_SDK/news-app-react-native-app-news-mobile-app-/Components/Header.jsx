import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
const data = require("./countries.json");
import SearchBar from "./SearchBar";
function Header({ setCountry }) {
  const [muted, setMuted] = useState(true);
  const [search, setSearch] = useState(false);
  const [searchterm, setSearchTerm] = useState("");

  //  a function that helps us to get tha object key by value
  function getKeyByValue(object, value) {
    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (object[prop] === value) return prop;
      }
    }
  }

  const handleMute = () => {
    if (muted) {
      Alert.alert(
        "App Notification",
        "Are you sure you want to allow Notification on this app?",
        [
          //  These are buttons for the alert
          {
            text: "cancel",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "yes",
            // close the app
            onPress: () => setMuted(false),
            style: "destructive",
          },
        ]
      );
    } else {
      Alert.alert(
        "App Notification",
        "Are you sure you want to turn off Notification on this app?",
        [
          //  These are buttons for the alert
          {
            text: "cancel",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "yes",
            // close the app
            onPress: () => setMuted(!false),
            style: "destructive",
          },
        ]
      );
    }
  };
  const handleSearch = () => {
    setSearch(true);
  };
  const handleSearchTerm = () => {
    if (searchterm) {
      const country_iso2 = getKeyByValue(data, searchterm);
      setCountry(country_iso2);
    }
    setSearchTerm("");
    setSearch("");
  };
  return !search ? (
    <View style={styles.header}>
      <View style={styles.header__left}>
        <TouchableOpacity>
          <Entypo name="menu" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.header__center}>
        <Text style={styles.header__centerHeader}>News</Text>
      </View>
      <View style={styles.header__right}>
        <TouchableOpacity
          style={styles.header__rightButton}
          onPress={handleSearch}
        >
          <FontAwesome name="search" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.header__rightButton}
          onPress={handleMute}
        >
          {muted ? (
            <Ionicons name="md-notifications-off" size={25} color="#fff" />
          ) : (
            <Ionicons name="md-notifications" size={25} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => setSearch(false)}>
        <MaterialIcons name="arrow-back" size={25} color="#fff" />
      </TouchableOpacity>
      <View style={styles.header__searchRight}>
        <TextInput
          style={styles.header__searchRightInput}
          onChangeText={(text) => setSearchTerm(text)}
          placeholder="Search News"
          value={searchterm}
        />
        <TouchableOpacity
          onPress={handleSearchTerm}
          style={styles.header__rightButtonSearch}
        >
          <FontAwesome name="search" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    backgroundColor: "#3A454E",
    color: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header__right: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header__centerHeader: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 20,
  },
  header__rightButton: {
    marginLeft: 20,
  },
  header__searchRight: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    marginLeft: 10,
  },
  header__searchRightInput: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 1,
    borderRadius: 5,
    borderLeftWidth: 0,
  },
  header__rightButtonSearch: {
    paddingHorizontal: 10,
  },
});

export default Header;
