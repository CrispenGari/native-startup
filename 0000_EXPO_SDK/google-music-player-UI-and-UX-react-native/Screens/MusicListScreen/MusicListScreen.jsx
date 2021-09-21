import React from "react";

import { styles } from "./MusicListScreenStyles";
import { View, Text, ScrollView } from "react-native";
import { Music, Footer } from "../../Components";
import { Link, useHistory } from "react-router-native";

import { musiclist } from "../MusicPlayerScreen/Player";
const MusicListScreen = () => {
  const history = useHistory();
  return (
    <View style={styles.musiclist}>
      <ScrollView style={styles.musiclist__scroll}>
        {musiclist.map((music, id) => (
          <Music key={id} music={music} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MusicListScreen;
