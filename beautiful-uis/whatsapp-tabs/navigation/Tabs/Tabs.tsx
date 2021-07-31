import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Camera, Status, Chats, Calls } from "../../screens";
import { COLORS } from "../../assets/colors";

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      style={{
        elevation: 0,
        borderWidth: 0,
        flex: 1,
        backgroundColor: COLORS.HEADER_COLOR,
      }}
      swipeEnabled
    >
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
