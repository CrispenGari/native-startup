import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Center: React.FC = ({ children }) => {
  return <View style={styles.center}>{children}</View>;
};

export default Center;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
