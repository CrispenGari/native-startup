import React, { useState } from "react";
import { View, Text, Dimensions, Button } from "react-native";
import { styles } from "./StopWatchStyles";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
function StopWatch({ startClock }) {
  const [start, setStart] = useState(null);
  React.useEffect(() => {
    if (startClock) {
      setStart(null);
    } else {
      setStart({
        timerStart: false,
        stopwatchStart: false,
        timerReset: false,
        stopwatchReset: false,
      });
    }
  }, [startClock]);

  const isLessThanTen = (value: number) => {
    if (value < 10) {
      return "0" + value.toString();
    } else {
      return value;
    }
  };

  return (
    <View style={styles.stopwatch}>
      <Stopwatch
        laps
        msecs
        start={start}
        options={{
          container: {
            backgroundColor: "transparent",
            padding: 5,
            borderRadius: 5,
          },
          text: {
            fontSize: 40,
            color: "#4B98A3",
          },
        }}
      />
    </View>
  );
}

export default StopWatch;
