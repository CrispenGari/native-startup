import React from "react";
import { StyleSheet } from "react-native";
import Settings from "../Settings/Settings";

import Drawer from "../Drawer/Drawer";
const Wind: React.FC<any> = (props) => {
  console.log("wind.tsx", props.route?.name);
  return <Drawer routeName={props.route?.name} />;
};

export default Wind;

const styles = StyleSheet.create({});
