import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab: React.FC<{
  icon: string;
  isSelected: boolean;
}> = ({ icon, isSelected }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Ionicons
      name={icon as any}
      color={isSelected ? "black" : "grey"}
      size={20}
    />
  </View>
);
export default Tab;
