import { StatusBar } from "expo-status-bar";
import React from "react";
import State from "./StateProvider/Provider";
import Route from "./routes";
import { View } from "react-native";
const App: React.FC = () => {
  return (
    <State>
      <View style={{ flex: 1, paddingTop: 25 }}>
        <StatusBar style="auto" />
        <Route />
      </View>
    </State>
  );
};

export default App;
