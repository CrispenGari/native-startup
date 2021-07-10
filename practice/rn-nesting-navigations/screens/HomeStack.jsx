import React from "react";
import { Text } from "react-native";
import Center from "../components/Center";

import { createStackNavigator } from "@react-navigation/stack";
import HomeDrawer from "./HomeDrawer";
const Stack = createStackNavigator();

const Feed = () => <HomeDrawer />;
const Settings = ({ route }) => {
  return (
    <Center>
      <Text>{route.name}</Text>
    </Center>
  );
};
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default HomeStack;
