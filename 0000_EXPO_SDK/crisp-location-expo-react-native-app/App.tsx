import React, { useEffect, useState } from "react";
import { View, BackHandler, LogBox } from "react-native";
import styles from "./AppStyles";
import { Main, Header } from "./Components";
import { btnAction } from "./utils";
import * as Location from "expo-location";
export default function App() {
  LogBox.ignoreAllLogs();
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      btnAction
    );
    return () => {
      backHandler.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <Main />
    </View>
  );
}
