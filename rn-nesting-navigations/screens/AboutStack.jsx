import React, { useLayoutEffect } from "react";
import { Text, Button, TouchableOpacity } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import Center from "../components/Center";
const Stack = createStackNavigator();

const Profile = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text>HOME</Text>
          </TouchableOpacity>
        );
      },
    });
  }, []);
  return (
    <Center>
      <Text>{route.name}</Text>
      <Button title="Themes" onPress={() => navigation.push("Themes")} />
      <Button title="Themes" onPress={() => navigation.push("Themes")} />
    </Center>
  );
};
const Themes = ({ route, navigation }) => (
  <Center>
    <Text>{route.name}</Text>
    <Button title="Profile" onPress={() => navigation.push("Profile")} />
  </Center>
);
const AboutStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profiles">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Themes" component={Themes} />
    </Stack.Navigator>
  );
};

export default AboutStack;
