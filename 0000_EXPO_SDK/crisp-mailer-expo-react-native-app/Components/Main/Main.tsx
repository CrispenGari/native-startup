import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./MainStyles";
import { Mail } from "../../Components";
const Main = ({ setOpenMail, openMail }) => {
  if (openMail) {
    return (
      <View style={styles.main}>
        <Mail />
      </View>
    );
  } else {
    return (
      <View style={styles.main}>
        <Text style={styles.main__text1}>
          Hello, How are you doing today? Welcome to the simple mailing app!!
        </Text>
        <View style={styles.main__controls}>
          <TouchableOpacity
            style={styles.main__open}
            onPress={() => setOpenMail(!openMail)}
          >
            <Entypo name="mail" size={27} color="orange" />
            <Text style={styles.main__controltext}>Send Mail</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.main__text2}>
          By clicking send mail button you are automatically accepting the terms
          and conditions of using this app.
        </Text>
      </View>
    );
  }
};
export default Main;
