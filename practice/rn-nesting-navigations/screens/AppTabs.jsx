import React from "react";

import { AntDesign } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const AppTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
            return <AntDesign name={"home"} size={size} color={color} />;
          } else if (route.name === "About") {
            return <AntDesign name={"info"} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="About" component={AboutStack} />
    </Tab.Navigator>
  );
};

export default AppTabs;
