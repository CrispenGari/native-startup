import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

import Wind from "../screens/Wind/Wind";
import Search from "../screens/Search/Search";
import Temperature from "../screens/Temperature/Temperature";
const Tabs = createBottomTabNavigator();
const Index: React.FC = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Temperature") {
              return (
                <MaterialCommunityIcons
                  name="weather-lightning-rainy"
                  size={24}
                  color={focused ? "lightblue" : "gray"}
                />
              );
            } else if (route.name === "Wind") {
              return (
                <MaterialCommunityIcons
                  name="weather-cloudy-arrow-right"
                  size={24}
                  color={focused ? "lightblue" : "gray"}
                />
              );
            }
            return (
              <FontAwesome5
                color={focused ? "lightblue" : "gray"}
                name="search-location"
                size={24}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "lightblue",
          inactiveTintColor: "gray",
          style: {
            backgroundColor: "rgba(0, 0, 0 ,.6)",
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            elevation: 0,
          },
          keyboardHidesTabBar: true,
        }}
        sceneContainerStyle={{
          backfaceVisibility: "hidden",
        }}
        initialRouteName="Temperature"
      >
        <Tabs.Screen name="Temperature" component={Temperature} />
        <Tabs.Screen name="Wind" component={Wind} />
        <Tabs.Screen name="Search" component={Search} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Index;

const styles = StyleSheet.create({});
