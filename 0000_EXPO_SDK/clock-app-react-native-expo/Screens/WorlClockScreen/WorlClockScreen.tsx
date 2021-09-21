import React from "react";
import { View, Text } from "react-native";
import { styles } from "./WorlClockScreenStyles";
import { Add, WorldClock } from "../../Components";
function WorlClockScreen() {
  return (
    <View style={styles.worldclock}>
      <WorldClock />
      <View style={styles.worldclock__add}>
        <Add />
      </View>
    </View>
  );
}

export default WorlClockScreen;
