import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Camera, Status, Chats, Calls } from "../../screens";
import ChatStack from "../Stack/Chats/Chats";
import { COLORS } from "../../assets/colors";
import CustomTab from "../../components/CustomTab/CustomTab";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
const Tab = createMaterialTopTabNavigator();

const Tabs: React.FC<any> = ({}) => {
  const showHeader = useSelector((state: any) => state.showHeader);
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        style: {
          backgroundColor: COLORS.HEADER_COLOR,
          elevation: 0,
          borderWidth: 0,
          display: showHeader ? "flex" : "none",
        },
        showIcon: false,
        // renderIndicator: () => <View />,

        indicatorStyle: {
          backgroundColor: "white",
        },
      }}
      screenOptions={{}}
      sceneContainerStyle={{
        flex: 1,
        height: "100%",
      }}
      swipeEnabled
    >
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <CustomTab
              Icon={
                <Feather
                  name="camera"
                  size={24}
                  color={focused ? "white" : COLORS.TAB_COLOR}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        children={() => <ChatStack />}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <CustomTab content={"5"} label="CHATS" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Status"
        component={Status}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <CustomTab content="status" label="STATUS" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <CustomTab label="CALLS" focused={focused} content="2" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
