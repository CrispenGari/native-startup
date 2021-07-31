import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { COLORS } from "../../assets/colors";
import Button from "../../components/Button/Button";
import { MaterialIcons } from "@expo/vector-icons";

const Chats = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Button
        bottom={30}
        backgroundColor={COLORS.ICON_CONTAINER_COLOR}
        Icon={
          <MaterialIcons
            name="chat"
            size={25}
            color="white"
            style={{
              transform: [{ rotate: "360deg" }],
            }}
          />
        }
        containerStyles={{
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
        }}
      ></ScrollView>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({});
