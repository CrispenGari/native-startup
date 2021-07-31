import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { COLORS } from "../../assets/colors";
import Button from "../../components/Button/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const Status = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Button
        bottom={90}
        backgroundColor={COLORS.ICON_COLOR_2}
        Icon={<MaterialIcons name="create" size={25} color="white" />}
        containerStyles={{
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <Button
        bottom={30}
        backgroundColor={COLORS.ICON_CONTAINER_COLOR}
        Icon={<Feather name="camera" size={25} color="white" />}
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

export default Status;

const styles = StyleSheet.create({});
