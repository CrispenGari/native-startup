import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./HeaderStyles";
import { Feather, AntDesign } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.header__cameras}>
        <TouchableOpacity style={styles.header__camera1} onPress={() => {}}>
          <AntDesign name="questioncircle" size={30} color="lightseagreen" />
        </TouchableOpacity>
      </View>

      <Text style={styles.header__text}>Fun Questions 😻</Text>
      <TouchableOpacity style={styles.header__share}>
        <Feather name="settings" size={24} color="orange" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
