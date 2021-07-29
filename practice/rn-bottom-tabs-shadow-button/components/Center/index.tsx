import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Center: React.FC = ({ children }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        flex: 1,
        width: "100%",
      }}
    >
      {children}
    </View>
  );
};

export default Center;
