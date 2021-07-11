import React from "react";
import { StyleSheet } from "react-native";
import { Home, Stats, Settings } from "../index";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const Current: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Stats" component={Stats} />
    </Stack.Navigator>
  );
};

export default Current;

const styles = StyleSheet.create({});
