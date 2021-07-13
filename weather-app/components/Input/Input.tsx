import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const Input = () => {
  const [query, setQuery] = useState("");

  const search = () => {
    alert(query);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 10,
        margin: 10,
        width: Dimensions.get("window").width * 0.8,
      }}
    >
      <TouchableOpacity onPress={search}>
        <MaterialIcons name="search" size={30} color="gray" />
      </TouchableOpacity>
      <TextInput
        placeholder="Search location..."
        style={{
          fontSize: 16,
          flex: 1,
        }}
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={search}
        value={query}
      />
      <TouchableOpacity
        onPress={() => {
          setQuery("");
        }}
      >
        <MaterialIcons name="cancel" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
