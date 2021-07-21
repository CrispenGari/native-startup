import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ViewBase } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TabIcon from "./components/TabIcon";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const Settings = ({ route }) => {
  return (
    <View>
      <Text>{route.name}</Text>
    </View>
  );
};
const Home = ({ route }) => {
  return (
    <View>
      <Text>{route.name}</Text>
    </View>
  );
};
const Create = ({ route }) => {
  return (
    <View>
      <Text>{route.name}</Text>
    </View>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            showLabel: false,
            style: {
              backgroundColor: "#3e3e3e",
              height: 100,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                return (
                  <TabIcon
                    focused={focused}
                    title="Home"
                    Icon={AntDesign}
                    iconName="home"
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Create"
            component={Create}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                return (
                  <TabIcon
                    focused={focused}
                    title="Create"
                    Icon={Ionicons}
                    iconName="add-circle-sharp"
                    isCreate
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                return (
                  <TabIcon
                    focused={focused}
                    title="Settings"
                    Icon={Feather}
                    iconName="settings"
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
});
