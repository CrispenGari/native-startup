import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import Bar from "./components/BarChart/BarChart";
import HeatMap from "./components/HeatMap/HeatMap";
import Line from "./components/LineChart/LineChart";
import Pie from "./components/PieChart/PieChart";
import ProgressRingChat from "./components/ProgressRingChat/ProgressRingChat";
import StackedBars from "./components/StackedBarChart/StackedBarChart";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Line />
      <ProgressRingChat />
      <Bar />
      <StackedBars />
      <Pie />
      <HeatMap />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingBottom: 50,
  },
});
