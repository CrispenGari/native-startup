import React from "react";

import { View, Text } from "react-native";
import { styles } from "./HeaderStyles";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.header__text}>CLOCK</Text>
      <TouchableOpacity>
        <Ionicons name="md-more" size={30} color="#4B98A3" />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
