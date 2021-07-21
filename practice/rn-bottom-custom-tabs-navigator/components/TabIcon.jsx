import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TabIcon = ({ Icon, title, iconName, focused, isCreate }) => {
  if (isCreate) {
    return (
      <View
        style={{
          justifyContent: "space-evenly",
          width: 90,
          alignItems: "center",
          backgroundColor: "black",
          width: 100,
          height: 100,
          borderRadius: 50,
          marginBottom: 50,
        }}
      >
        <Icon name={iconName} size={50} color={"white"} />
        <Text
          style={{
            color: "white",
            display: "none",
          }}
        >
          {title}
        </Text>
      </View>
    );
  }
  return (
    <View
      style={{
        justifyContent: "space-evenly",
        width: 90,
        alignItems: "center",
      }}
    >
      <Icon name={iconName} size={24} color={focused ? "white" : "gray"} />
      <Text
        style={{
          color: focused ? "white" : "gray",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default TabIcon;

const styles = StyleSheet.create({});
