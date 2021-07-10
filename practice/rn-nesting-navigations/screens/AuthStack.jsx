import React, { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import Center from "../components/Center";
import { useStateValue } from "../AuthProvider";

const Stack = createStackNavigator();

const Login = ({ navigation, route }) => {
  const [{}, dispatch] = useStateValue();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Sign In (" + route?.name + ")",
    });
  }, [navigation, route]);

  return (
    <Center>
      <Button
        title="CREATE ACCOUNT"
        onPress={() => navigation.push("Register")}
      />
      <View style={{ height: 50 }} />
      <Button
        title="LOGIN"
        onPress={() => {
          dispatch({
            type: "SET_USER",
            value: {
              username: "Bill",
            },
          });
        }}
      />
    </Center>
  );
};
const Register = ({ navigation, route }) => {
  const [{}, dispatch] = useStateValue();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Sign Up (" + route?.name + ")",
    });
  }, [navigation, route]);
  return (
    <Center>
      <Button title="BACK TO LOGIN" onPress={() => navigation.goBack()} />
      <View style={{ height: 50 }} />
      <Button
        title="CREATE A FAKE ACCOUNT"
        onPress={() => {
          dispatch({
            type: "SET_USER",
            value: {
              username: "Bill",
            },
          });
        }}
      />
    </Center>
  );
};
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
