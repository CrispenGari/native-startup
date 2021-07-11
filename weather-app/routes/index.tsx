import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Daily from "../screens/Daily/Daily";
import Hourly from "../screens/Hourly/Hourly";
import Current from "../screens/Current/Current";
const Tabs = createBottomTabNavigator();
const Index: React.FC = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Daily") {
              return (
                <MaterialCommunityIcons
                  name="weather-lightning-rainy"
                  size={24}
                  color={focused ? "lightblue" : "gray"}
                />
              );
            } else if (route.name === "Hourly") {
              return (
                <MaterialCommunityIcons
                  name="weather-cloudy-arrow-right"
                  size={24}
                  color={focused ? "lightblue" : "gray"}
                />
              );
            }
            return (
              <MaterialCommunityIcons
                name="weather-hazy"
                size={24}
                color={focused ? "lightblue" : "gray"}
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
        }}
        sceneContainerStyle={{
          backfaceVisibility: "hidden",
        }}
      >
        <Tabs.Screen name="Current" component={Current} />
        <Tabs.Screen name="Hourly" component={Hourly} />
        <Tabs.Screen name="Daily" component={Daily} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Index;

const styles = StyleSheet.create({});
