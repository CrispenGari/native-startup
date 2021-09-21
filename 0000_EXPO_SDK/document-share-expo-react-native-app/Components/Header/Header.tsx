import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./HeaderStyles";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.header__camera}>
        <FontAwesome5 name="file-pdf" size={25} color="lightseagreen" />
      </TouchableOpacity>
      <Text style={styles.header__text}>Crisp (pdf) Share</Text>
      <TouchableOpacity style={styles.header__share}>
        <AntDesign name="setting" size={24} color="orange" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
