import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { db } from "../../firebase";
const Group = ({ group, navigateInChat }) => {
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    db.collection("groups")
      .doc(group?.id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setLastMessage(snapshot?.docs[0]?.data()?.message);
      });
  }, []);
  return (
    <ListItem
      bottomDivider
      onPress={() => {
        navigateInChat(group?.data?.name, group?.id);
      }}
    >
      <Avatar
        size="medium"
        rounded
        title={group?.data?.name[0]?.toUpperCase()}
        activeOpacity={0.4}
        containerStyle={{
          backgroundColor: "#fafafa",
        }}
        titleStyle={{ color: "black", fontSize: 18 }}
        icon={{ name: "meetup", color: "red", type: "font-awesome" }}
      />
      <ListItem.Content>
        <ListItem.Title>{group?.data?.name}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1}>{lastMessage}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default Group;

const styles = StyleSheet.create({});
