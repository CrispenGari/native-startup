import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppTabs from "./AppTabs";
import { useStateValue } from "../AuthProvider";

const Screens = () => {
  const [{ user }] = useStateValue();
  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Screens;
