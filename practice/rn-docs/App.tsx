import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Platform, View, Button, Linking } from "react-native";

const App = () => {
  console.log(Platform.OS, Platform.Version, Platform.isTV);
  return (
    <View style={styles.container}>
      <Button title="openGoogle" />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
