import React, { useState } from "react";

import { View, Text } from "react-native";
import { styles } from "./StopWatchScreenStyles";
import { Footer, StopWatch } from "../../Components";
function StopWatchScreen() {
  const [startClock, setStartClock] = useState(true);
  return (
    <View style={styles.stopwatch}>
      <StopWatch startClock={startClock} />
      <View style={styles.stopwatch__footer}>
        <Footer setStartClock={setStartClock} />
      </View>
    </View>
  );
}

export default StopWatchScreen;
