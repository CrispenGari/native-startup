import React, { useState } from "react";

import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { styles } from "./FooterStyles";
import {
  MaterialIcons,
  AntDesign,
  FontAwesome5,
  Fontisto,
} from "@expo/vector-icons";
const width = Dimensions.get("screen").width;
import { Bar } from "react-native-progress";
const Footer = ({ setPlay, setNext }) => {
  const [playing, setPlaying] = useState(false);

  const handleSetNext = (value) => {
    setNext(value);
  };
  const handlePlay = () => {
    if (playing) {
      setPlaying(false);
      setPlay(!true);
    } else {
      setPlaying(true);
      setPlay(true);
    }
  };
  return (
    <View style={styles.footer}>
      <Bar
        progress={0.3}
        width={width}
        color="#F45730"
        style={{
          borderRadius: 0,
          borderColor: "#fff",
          height: 6,
        }}
      />
      <View style={styles.footer__controls}>
        <View style={styles.footer__controlsTimes}>
          <Text style={styles.footer__controlsTime}>4:00</Text>
          <Text style={styles.footer__controlsTime}>4:00</Text>
        </View>
        <View style={styles.footer__controlsButtons}>
          <TouchableOpacity>
            <AntDesign name="like2" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSetNext(!true)}>
            <MaterialIcons name="skip-previous" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footer__controlsPlayPause}
            onPress={handlePlay}
          >
            {playing ? (
              <Fontisto name="pause" size={15} color="white" />
            ) : (
              <FontAwesome5 name="play" size={15} color="white" />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSetNext(true)}>
            <MaterialIcons name="skip-next" size={30} color="black" />
          </TouchableOpacity>

          <TouchableOpacity>
            <AntDesign name="dislike2" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Footer;
