import React, { useState, useEffect } from "react";

import { styles } from "./MusicPlayerScreenStyles";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { Link } from "react-router-native";
import { Audio } from "expo-av";
import { Footer } from "../../Components";

import { musiclist } from "./Player";
const MusicPlayerScreen = () => {
  const [repeat, setRepeat] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [play, setPlay] = useState(false);
  const [next, setNext] = useState(false);
  const [current, setCurrent] = useState({});
  let i = 0;
  useEffect(() => {
    if (next) {
      setCurrent(musiclist[i]);
      i++;
    } else {
      if (i > 0) {
        setCurrent(musiclist[i]);
      } else {
        i = musiclist.length - 1;
        setCurrent(musiclist[i]);
      }
      i--;
    }
  }, [next]);

  useEffect(() => {
    const funct = async () => {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(
        {
          uri: musiclist[0].uri,
        },
        {
          shouldPlay: play,
          volume: 1,
        },
        false
      );
    };

    funct();
    console.log("Use effect fired");
  }, [play, shuffle, repeat]);
  const handleShuffle = () => {
    if (shuffle) {
      setShuffle(false);
    } else {
      setShuffle(true);
    }
  };
  const handleRepeat = () => {
    if (repeat === 0) {
      setRepeat(1);
    } else if (repeat === 1) {
      setRepeat(2);
    } else {
      setRepeat(0);
    }
  };
  return (
    <View style={styles.musiclist}>
      <ImageBackground
        style={{ flex: 1 }}
        source={{
          uri: current.imageSource,
        }}
      >
        <View style={styles.musiclist__buttons}>
          <TouchableOpacity onPress={handleRepeat}>
            {repeat === 2 ? (
              <MaterialIcons name="repeat-one" size={34} color="#F45730" />
            ) : (
              <Ionicons
                name="md-repeat"
                size={30}
                color={repeat == 0 ? "white" : "#F45730"}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShuffle}>
            <Feather
              name="shuffle"
              size={30}
              color={!shuffle ? "white" : "#F45730"}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Footer setPlay={setPlay} setNext={setNext} />
    </View>
  );
};

export default MusicPlayerScreen;
