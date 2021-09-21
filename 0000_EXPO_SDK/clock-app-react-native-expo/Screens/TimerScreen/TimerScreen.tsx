import React from "react";
import { View, Text } from "react-native";
import { styles } from "./TimerScreenStyles";
import { FooterTimer, Picker } from "../../Components";
function TimerScreenStyles() {
  return (
    <View style={styles.timer}>
      <Picker />
      <View style={styles.timer__footer}>
        <FooterTimer />
      </View>
    </View>
  );
}

export default TimerScreenStyles;
