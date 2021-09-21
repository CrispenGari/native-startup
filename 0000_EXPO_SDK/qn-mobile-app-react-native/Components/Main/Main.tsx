import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Camera } from "../../Components";
import styles from "./MainStyles";
import constants from "../../utils/constants";
const Main = ({ start, setStart }) => {
  const startHandler = () => {
    setStart(!start);
  };

  if (start) {
    return (
      <View style={styles.main}>
        <Camera />
      </View>
    );
  }
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.main__open} onPress={startHandler}>
        <Feather name="camera" size={50} color="lightseagreen" />
      </TouchableOpacity>
      <Text style={styles.main__instruction}>
        Click the camera icon to take a picture or a video
      </Text>
    </View>
  );
};
export default Main;
