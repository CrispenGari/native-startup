import React from "react";
import { View, Text } from "react-native";
import { styles } from "./AlamScreenStyles";
import { Add, TimerRow } from "../../Components";
function AlamScreen() {
  return (
    <View style={styles.alam}>
      <TimerRow />
      <View style={styles.alam__add}>
        <Add />
      </View>
    </View>
  );
}

export default AlamScreen;
