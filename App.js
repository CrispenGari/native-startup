import "react-native-gesture-handler";
import React from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Register from "./Screens/Register/Register";
import Home from "./Screens/Home/Home";
import Login from "./Screens/Login/Login";
import Chat from "./Screens/Chat/Chat";
import Profile from "./Screens/Profile/Profile";
import NewChart from "./Screens/NewChat/NewChart";

const Stack = createStackNavigator();
const globalOptions = {
  headerStyle: {
    backgroundColor: "#2c6bed",
  },
  headerTitleStyle: {
    color: "white",
  },
  headerTintColor: "white",
  headerTitleAlign: "center",
};

export default function App() {
  // LogBox.ignoreAllLogs(true);
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={globalOptions}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="NewChat" component={NewChart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
