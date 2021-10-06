import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import { ballon } from "./App.module.css";

const Ballon = () => {
  return (
    <View style={ballon}>
      <Text>Ballon</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Ballon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
