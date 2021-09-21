import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./AddStyles";
function Add() {
  return (
    <TouchableOpacity style={styles.add}>
      <Ionicons name="md-add" size={30} color="white" />
    </TouchableOpacity>
  );
}

export default Add;
