import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BasicExample from "./components/BasicExample";
import MyChart from "./components/MyChart";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={{ height: 25 }} />
      {/* <BasicExample /> */}
      <MyChart />
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
