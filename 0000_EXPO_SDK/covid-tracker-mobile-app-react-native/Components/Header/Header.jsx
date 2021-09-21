import React, { useState } from "react";

import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
function Header() {
  const [bell, setBell] = useState(true);
  const handleBell = () => {
    if (!bell) {
      Alert.alert(
        "App Notification",
        "Are you sure you to allow Covid-19 app Notifications",
        [
          //  These are buttons for the alert
          {
            text: "cancel",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "yes",
            // close the app
            onPress: () => setBell(true),
            style: "destructive",
          },
        ]
      );
    } else {
      Alert.alert(
        "App Notification",
        "Are you sure you to turn OFF Covid-19 app Notifications",
        [
          //  These are buttons for the alert
          {
            text: "cancel",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "yes",
            // close the app
            onPress: () => setBell(false),
            style: "destructive",
          },
        ]
      );
    }
  };
  return (
    <View style={styles.header}>
      <View style={styles.header__left}>
        <TouchableOpacity>
          <Feather name="menu" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.header__center}>
        <Text style={styles.header__text}>COVID-19 Tracker</Text>
      </View>
      <View style={styles.header__right}>
        <View style={styles.header__searchIcon}>
          <TouchableOpacity>
            <Feather name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.header__bellIcon}>
          <TouchableOpacity onPress={handleBell}>
            {bell ? (
              <Ionicons name="md-notifications-off" size={30} color="white" />
            ) : (
              <Ionicons name="md-notifications" size={30} color="white" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "tomato",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  header__text: {
    color: "white",
    fontWeight: "800",
  },
  header__center: {},
  header__left: {},
  header__right: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header__searchIcon: {
    marginRight: 10,
  },
  header__bellIcon: {
    marginLeft: 10,
  },
});
export default Header;
