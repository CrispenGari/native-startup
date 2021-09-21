import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./HeaderStyles";
import { Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
const Header = ({ openMail, setOpenMail }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.header__camera}
        onPress={() => setOpenMail(!openMail)}
      >
        {openMail ? (
          <Ionicons name="md-arrow-back" size={27} color="orange" />
        ) : (
          <Entypo name="mail" size={27} color="orange" />
        )}
      </TouchableOpacity>
      <Text style={styles.header__text}>Crisp Mailer</Text>
      <TouchableOpacity style={styles.header__share}>
        <AntDesign name="setting" size={24} color="orange" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
