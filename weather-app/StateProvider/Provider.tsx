import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers from "../reducers";

const store = createStore(rootReducers);
const State: React.FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default State;
