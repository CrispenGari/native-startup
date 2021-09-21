import React, { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./FooterStyles";

function Footer({ setStartClock }) {
  const [start, setStart] = useState(false);
  const handleStart = () => {
    if (start) {
      setStart(false);
      setStartClock(false);
    } else {
      setStart(true);
      setStartClock(true);
    }
  };
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footer__btn} onPress={handleStart}>
        <Text style={styles.footer__btnText}>{`${
          start ? "STOP" : "START"
        }`}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Footer;
