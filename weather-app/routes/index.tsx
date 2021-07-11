import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Daily, Hourly, Current } from "../screens";
const Tabs = createBottomTabNavigator();

const Index: React.FC = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Current" component={Current} />
        <Tabs.Screen name="Hourly" component={Hourly} />
        <Tabs.Screen name="Daily" component={Daily} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Index;

const styles = StyleSheet.create({});
