import React, { useEffect, useState } from "react";
import { Text, View, ImageBackground } from "react-native";

import styles from "./AppStyles";
import { Weather, Temp } from "./components";
const hot = require("./assets/hot.jpg");
const cold = require("./assets/cold.jpg");

const App = () => {
  const [background, setBackground] = useState(cold);
  return (
    <View style={styles.app}>
      <ImageBackground source={background} style={styles.app__main}>
        <Weather setBackground={setBackground} />
      </ImageBackground>
    </View>
  );
};
export default App;
