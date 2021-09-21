import React from "react";

import { styles } from "./MusicStyles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import { Link, useHistory } from "react-router-native";
const Music = ({ music }) => {
  const history = useHistory();
  return (
    <TouchableOpacity style={styles.music} onPress={() => history.push("/")}>
      <View style={styles.music__left}>
        <FontAwesome5 name="equals" size={20} color="gray" />
      </View>
      <View style={styles.music__center}>
        <Image
          style={styles.music__centerImage}
          source={{
            uri: music.imageSource,
          }}
        />
        <View style={styles.music__centerInfo}>
          <Text style={styles.music__centerInfoName}>{music.title}</Text>
          <Text style={styles.music__centerInfoAtist}>
            {music.author} by {music.source}
          </Text>
        </View>
      </View>
      <View style={styles.music__right}>
        <Fontisto name="more-v-a" size={18} color="gray" />
      </View>
    </TouchableOpacity>
  );
};

export default Music;
