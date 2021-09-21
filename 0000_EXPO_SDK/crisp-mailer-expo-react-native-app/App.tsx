import React, { useState } from "react";
import { View, BackHandler, LogBox } from "react-native";
import styles from "./AppStyles";
import { Main, Header } from "./Components";
import { btnAction } from "./utils";
export default function App() {
  const [openMail, setOpenMail] = useState(false);
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
      <Header openMail={openMail} setOpenMail={setOpenMail} />
      <Main openMail={openMail} setOpenMail={setOpenMail} />
    </View>
  );
}
