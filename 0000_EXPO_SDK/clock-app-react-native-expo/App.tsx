import "react-native-gesture-handler";
import React from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { styles } from "./AppStyles";
import { NavigationContainer } from "@react-navigation/native";
import {
  AlamScreen,
  StopWatchScreen,
  TimerScreen,
  WorlClockScreen,
} from "./Screens";
import { Header } from "./Components";
const Tab = createMaterialTopTabNavigator();
export default function App() {
  console.disableYellowBox = true;
  return (
    <>
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            allowFontScaling: true,
            labelStyle: { fontSize: 12 },
            indicatorStyle: {
              backgroundColor: "#4B98A3",
              borderBottomWidth: 4,
              borderBottomColor: "#4B98A3",
            },
          }}
        >
          <Tab.Screen name="ALARM" component={AlamScreen} />
          <Tab.Screen name="WORLD CLOCK" component={WorlClockScreen} />
          <Tab.Screen name="STOPWATCH" component={StopWatchScreen} />
          <Tab.Screen name="TIMER" component={TimerScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
