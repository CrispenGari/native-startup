import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Header: React.FC<any> = ({ cityName, _panel }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        width: "100%",
        zIndex: 10,
        top: 5,
        padding: 20,
        backgroundColor: "transparent",
      }}
    >
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, .8)",
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
        activeOpacity={0.7}
        onPress={() => _panel.hide()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <Text
        style={{
          color: "white",
          fontSize: 20,
        }}
      >
        {cityName}
      </Text>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, .8)",
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
        activeOpacity={0.7}
      >
        <Ionicons name="md-menu" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
