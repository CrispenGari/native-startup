import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { LOGO } from "../../assets/images";
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
        display: "flex",
        paddingVertical: 0,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: theme,
        zIndex: 10,
      }}
    >
      <Image
        source={{ uri: Image.resolveAssetSource(LOGO).uri }}
        style={{
          width: 120,
          height: 70,
          resizeMode: "contain",
          tintColor: color,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            marginLeft: 10,
          }}
          activeOpacity={0.4}
        >
          <MaterialIcons name="add-box" size={28} color={color} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 10,
          }}
          activeOpacity={0.4}
        >
          <Feather name="send" size={28} color={color} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
