import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Home/Home";
import Settings from "../Settings/Settings";
import Stats from "../Stats/Stats";
import { MaterialIcons, Entypo, Feather } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
const D: React.FC<any> = ({ routeName }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: "rgba(0, 0, 0, .5)",
        width: "100%",
        paddingVertical: 0,
        paddingHorizontal: 0,
      }}
      screenOptions={({ route }) => ({
        drawerIcon: ({ color, focused, size }) => {
          if (route.name === "Home") {
            return (
              <MaterialIcons
                name="home"
                size={24}
                color={focused ? "lightblue" : "gray"}
              />
            );
          } else if (route.name === "Stats") {
            return (
              <Entypo
                name="area-graph"
                size={24}
                color={focused ? "lightblue" : "gray"}
              />
            );
          }
          return (
            <Feather
              name="settings"
              size={24}
              color={focused ? "lightblue" : "gray"}
            />
          );
        },
        drawerLabel: route.name.toUpperCase(),
      })}
      drawerContentOptions={{
        itemStyle: {
          paddingVertical: 0,
          paddingHorizontal: 0,
          margin: 0,
        },
        labelStyle: {
          color: "lightblue",
          fontSize: 16,
        },
        contentContainerStyle: {
          padding: 0,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        initialParams={{ parent: routeName }}
      />
      <Drawer.Screen
        name="Stats"
        component={Stats}
        initialParams={{ parent: routeName }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        initialParams={{ parent: routeName }}
      />
    </Drawer.Navigator>
  );
};

export default D;

const styles = StyleSheet.create({});
