import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./HeaderStyles";
import { Link, useHistory } from "react-router-native";
import { musiclist } from "../../Screens/MusicPlayerScreen/Player";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import MarqueeText from "react-native-marquee";
const Header = () => {
  const history = useHistory();
  return (
    <View style={styles.header}>
      <View style={styles.header__left}>
        <MaterialCommunityIcons name="music-circle" size={30} color="#5F5F5F" />
      </View>
      <View style={styles.header__center}>
        <MarqueeText
          style={styles.header__centerMusicname}
          duration={3000}
          marqueeOnStart
          loop
          marqueeDelay={1000}
        >
          {musiclist[0].author} by {musiclist[0].source}
        </MarqueeText>
        <Text style={styles.header__centerArtistname}>
          {musiclist[0].title}
        </Text>
      </View>
      <View style={styles.header__right}>
        <TouchableOpacity
          style={styles.header__rightBtns}
          onPress={() => history.replace("/music")}
        >
          <Text>Music</Text>
          <MaterialIcons name="queue-music" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.header__rightBtns}>
          <Feather name="more-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;
