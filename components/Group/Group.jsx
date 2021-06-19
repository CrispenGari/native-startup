import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
const Group = ({ group, navigateInChat }) => {
  return (
    <ListItem.Swipeable
      bottomDivider
      onPress={() => navigateInChat(group?.data?.name, group?.id)}
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
        <ListItem.Subtitle numberOfLines={1}>
          {
            "last message last message last message last message last message last message"
          }
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem.Swipeable>
  );
};

export default Group;

const styles = StyleSheet.create({});
