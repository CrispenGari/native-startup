import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, Feather } from "@expo/vector-icons";
import { COLORS } from "../../assets/colors";
const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        width: "100%",
        backgroundColor: COLORS.HEADER_COLOR,
      }}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "AssistantRegular",
          fontSize: 25,
          fontWeight: "800",
        }}
      >
        WhatsApp
      </Text>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity activeOpacity={0.8}>
          <Ionicons name="ios-search" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            marginLeft: 10,
          }}
        >
          <Feather name="more-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
