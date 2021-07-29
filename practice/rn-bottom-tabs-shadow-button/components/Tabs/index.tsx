import React from "react";
import { StyleSheet, Text } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Center from "../Center";
import TabBarIcon from "../TabBarIcon";
import TabBarButton from "../TabBarButton";
const Tab = createBottomTabNavigator();
const Home: React.FC<any> = ({ route }) => {
  return (
    <Center>
      <Text style={{ fontSize: 20 }}>{route.name}</Text>
    </Center>
  );
};
const Search: React.FC<any> = ({ route }) => (
  <Center>
    <Text style={{ fontSize: 20 }}>{route?.name}</Text>
  </Center>
);
const Likes: React.FC<any> = ({ route }) => (
  <Center>
    <Text style={{ fontSize: 20 }}>{route?.name}</Text>
  </Center>
);
const Profile: React.FC<any> = ({ route }) => (
  <Center>
    <Text style={{ fontSize: 20 }}>{route?.name}</Text>
  </Center>
);

const Tabs: React.FC<any> = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          backgroundColor: "#fafafa",
          elevation: 0,
          borderTopWidth: 0,
          height: 70,
        },
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <TabBarIcon
              focused={focused}
              Icon={
                <AntDesign
                  name="home"
                  size={30}
                  color={focused ? "cornflowerblue" : "gray"}
                />
              }
            />
          ),
          tabBarButton: (props) => <TabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <TabBarIcon
              focused={focused}
              Icon={
                <Feather
                  name="search"
                  size={30}
                  color={focused ? "cornflowerblue" : "gray"}
                />
              }
            />
          ),
          tabBarButton: (props) => <TabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Likes"
        component={Likes}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <TabBarIcon
              focused={focused}
              Icon={
                <AntDesign
                  name="heart"
                  size={30}
                  color={focused ? "cornflowerblue" : "gray"}
                />
              }
            />
          ),
          tabBarButton: (props) => <TabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <TabBarIcon
              focused={focused}
              Icon={
                <Ionicons
                  name="person-circle"
                  size={30}
                  color={focused ? "cornflowerblue" : "gray"}
                />
              }
            />
          ),

          tabBarButton: (props) => <TabBarButton {...props} />,
          tabBarBadge: "9",
          tabBarBadgeStyle: {
            backgroundColor: "cornflowerblue",
            color: "white",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
