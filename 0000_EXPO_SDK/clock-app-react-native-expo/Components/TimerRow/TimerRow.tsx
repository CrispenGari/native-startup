import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./TimerRowStyles";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Switch } from "react-native-gesture-handler";
function TimerRow() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const [isOn, setIsOn] = useState(false);
  return (
    <View style={styles.timerrow}>
      <Text style={styles.timerrow__text}>08:30</Text>

      <View style={styles.timerrow__right}>
        {days.map((day, i) => {
          return (
            <Text key={i} style={styles.timerrow__text_days}>
              {day}
            </Text>
          );
        })}
        <Switch
          style={styles.timerrow__switch}
          trackColor={{ false: "", true: "#4B98A3" }}
          thumbColor={"white"}
          onValueChange={() => setIsOn(!isOn)}
          value={isOn}
        />
      </View>
    </View>
  );
}

export default TimerRow;
