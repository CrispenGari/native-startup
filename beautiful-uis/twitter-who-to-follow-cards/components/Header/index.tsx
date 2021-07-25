import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { COLORS } from "../../assets/colors";

interface Props {
  theme: string;
}
const Header: React.FC<Props> = ({ theme }) => {
  const color =
    theme === COLORS?.DARK_BACKGROUND
      ? COLORS.LIGHT_BACKGROUND
      : COLORS?.DARK_BACKGROUND;
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        zIndex: 10,
        width: Dimensions.get("screen").width,
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: theme,
        borderBottomColor: "lightgray",
        borderBottomWidth: 0.25,
      }}
    >
      <TouchableOpacity activeOpacity={0.4}>
        <Ionicons name="ios-menu" size={30} color={COLORS.TWITTER_MAIN_COLOR} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4}>
        <FontAwesome5
          name="twitter"
          size={30}
          color={COLORS.TWITTER_MAIN_COLOR}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.4}>
        <MaterialCommunityIcons
          name="playlist-star"
          size={30}
          color={COLORS.TWITTER_MAIN_COLOR}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
