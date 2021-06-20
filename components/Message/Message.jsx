import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Avatar, ListItem, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
const Message = ({ sent, message }) => {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width * 0.7,
        marginVertical: 10,
        flexDirection: "row",
        alignSelf: sent ? "flex-end" : "flex-start",
      }}
    >
      <Avatar
        size="small"
        rounded
        title={message?.data?.displayName[0]?.toUpperCase()}
        activeOpacity={0.4}
        containerStyle={{
          backgroundColor: "#fafafa",
        }}
        titleStyle={{ color: "black", fontSize: 18 }}
        icon={{ name: "meetup", color: "red", type: "font-awesome" }}
      />
      <ListItem.Content
        style={{
          marginLeft: 5,
          width: "100%",
          backgroundColor: !sent ? "green" : "#2c6bed",
          borderRadius: 5,
          padding: 5,
        }}
      >
        <ListItem.Title style={{ color: "white" }}>
          {message?.data?.displayName}
        </ListItem.Title>
        <ListItem.Subtitle style={{ color: "white" }}>
          {message?.data?.message}
        </ListItem.Subtitle>
        <View
          style={{
            alignSelf: "flex-end",
          }}
        >
          <Ionicons
            name="checkmark-done"
            size={20}
            color={!sent ? "#2c6bed" : "white"}
          />
        </View>
      </ListItem.Content>
    </View>
  );
};

export default Message;
