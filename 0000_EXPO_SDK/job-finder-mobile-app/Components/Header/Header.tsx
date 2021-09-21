import React from "react";
import { Text, View, TouchableOpacity, Linking } from "react-native";
import { AntDesign, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import styles from "./HeaderStyles";
const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.header__left}>
        <MaterialIcons name="work" size={30} color="lightseagreen" />
        <Text style={styles.header__text}>Job Finder</Text>
      </View>
      <View style={styles.header__right}>
        <TouchableOpacity
          style={styles.header__button}
          onPress={async () => {
            await Linking.openURL("https://www.whatsapp.com/");
          }}
        >
          <FontAwesome5 name="whatsapp" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.header__button}
          onPress={async () => {
            await Linking.openURL("https://www.instagram.com");
          }}
        >
          <AntDesign name="instagram" size={24} color="#AC0F81" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.header__button}
          onPress={async () => {
            await Linking.openURL("https://www.twitter.com");
          }}
        >
          <AntDesign name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.header__button}
          onPress={async () => {
            await Linking.openURL("https://www.facebook.com");
          }}
        >
          <AntDesign name="facebook-square" size={24} color="#395498" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
