import React from "react";
import { View, BackHandler, LogBox } from "react-native";
import styles from "./AppStyles";
import { Main, Header } from "./Components";
import { btnAction } from "./utils";
export default function App() {
  LogBox.ignoreAllLogs();
  React.useEffect(() => {
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
