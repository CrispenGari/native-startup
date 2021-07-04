import React from "react";
import { Text, View } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Center from "../components/Center";
const Drawer = createDrawerNavigator();
const Feed = ({ navigation, route }) => {
  return (
    <Center>
      <Text>{route.name}</Text>
    </Center>
  );
};
const News = ({ navigation, route }) => {
  return (
    <Center>
      <Text>{route.name}</Text>
    </Center>
  );
};
const Football = ({ navigation, route }) => {
  return (
    <Center>
      <Text>{route.name}</Text>
    </Center>
  );
};
const More = ({ navigation, route }) => {
  return (
    <Center>
      <Text>{route.name}</Text>
    </Center>
  );
};

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="News" component={News} />
      <Drawer.Screen name="Football" component={Football} />
      <Drawer.Screen name="More" component={More} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
