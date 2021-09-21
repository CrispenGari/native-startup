import React, { useState } from "react";
import { View, BackHandler, LogBox } from "react-native";
import styles from "./AppStyles";
import { Main, Header } from "./Components";

import { btnAction } from "./utils";
export default function App() {
  LogBox.ignoreAllLogs(true);

  const [start, setStart] = useState(false);
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

      <Main setStart={setStart} start={start} />
    </View>
  );
  console.clear();
}
