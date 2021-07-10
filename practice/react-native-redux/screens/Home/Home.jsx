import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import actions from "../../actions";
const Home = () => {
  const user = useSelector((state) => state.user);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.setCounter(1));
  };
  const decrement = () => {
    dispatch(actions.setCounter(-1));
  };
  const login = () => {
    dispatch(
      actions.setUser({
        username: "username",
        email: "user@gmail.com",
        age: 23,
      })
    );
  };
  const logout = () => {
    dispatch(actions.setUser(null));
  };
  return (
    <View>
      {user ? (
        <Text>{JSON.stringify(user, null, 2)}</Text>
      ) : (
        <Text>To see the user info Login.</Text>
      )}
      <View style={{ height: 10 }} />
      <Button title="increment" onPress={increment} />
      <View style={{ height: 10 }} />
      <Button title="decrement" onPress={decrement} />

      <View style={{ height: 10 }} />
      <Button title="login" onPress={login} />
      <View style={{ height: 10 }} />
      <Button title="logout" onPress={logout} />
      <View style={{ height: 10 }} />
      <Text>COUNTER: {counter}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
