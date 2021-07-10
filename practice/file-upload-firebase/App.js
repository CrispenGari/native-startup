import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Form from "./components/Form";
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
