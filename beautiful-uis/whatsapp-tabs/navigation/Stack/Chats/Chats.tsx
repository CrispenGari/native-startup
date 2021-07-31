import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { Chats, ChatScreen } from "../../../screens";
import { COLORS } from "../../../assets/colors";
const Stack = createStackNavigator();

const ChatStack: React.FC<any> = () => {
  return (
    <Stack.Navigator
      initialRouteName="Chats"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: COLORS.HEADER_COLOR },
        headerTitleStyle: { color: "white" },
      }}
    >
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default ChatStack;

const styles = StyleSheet.create({});
