import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { COLORS } from "../../assets/colors";
import Button from "../../components/Button/Button";
import { MaterialIcons } from "@expo/vector-icons";
const Calls: React.FC<any> = ({ route }) => {
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
            name="add-call"
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

export default Calls;

const styles = StyleSheet.create({});
