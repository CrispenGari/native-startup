import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Center from "./components/Center";
import {
  MaterialTopTabNavigationProp,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { RouteProp } from "@react-navigation/native";

import { Feather, AntDesign } from "@expo/vector-icons";
export type HomeParamList = {
  Contacts: undefined;
  Chats: undefined;
  Calls: undefined;
};

export type HomeStackNavProps<T extends keyof HomeParamList> = {
  navigation: MaterialTopTabNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};

const Contacts = ({ navigation, route }: HomeStackNavProps<"Contacts">) => {
  return (
    <Center>
      <Text>{route.name}</Text>
    </Center>
  );
};
const Chats = ({ navigation, route }: HomeStackNavProps<"Chats">) => {
  return (
    <Center>
      <Text>{route.name}</Text>
    </Center>
  );
};
const Calls = ({ navigation, route }: HomeStackNavProps<"Calls">) => {
  return (
    <Center>
      <Text>{route.name}</Text>
    </Center>
  );
};
const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Chats"
        tabBarOptions={{
          showIcon: true,
          tabStyle: {
            flexDirection: "row-reverse",
          },
          iconStyle: {
            marginLeft: 5,
          },
          style: {
            paddingTop: 20,
          },
        }}
      >
        <Tab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            tabBarLabel: "Contacts",
            tabBarIcon: () => (
              <AntDesign name="contacts" size={24} color="lightseagreen" />
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{
            tabBarIcon: () => (
              <AntDesign name="wechat" size={24} color="orange" />
            ),
          }}
        />
        <Tab.Screen
          name="Calls"
          component={Calls}
          options={{
            tabBarIcon: () => (
              <Feather name="phone-call" size={24} color="lime" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
