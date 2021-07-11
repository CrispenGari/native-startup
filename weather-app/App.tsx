import { StatusBar } from "expo-status-bar";
import React from "react";
import State from "./StateProvider/Provider";
import Route from "./routes";
const App: React.FC = () => {
  return (
    <State>
      <StatusBar style="auto" />
      <Route />
    </State>
  );
};

export default App;
