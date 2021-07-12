import React from "react";
import { StyleSheet } from "react-native";
import Drawer from "../Drawer/Drawer";
const Search: React.FC<any> = (props) => {
  console.log("search.tsx", props.route?.name);
  return <Drawer routeName={props.route?.name} />;
};

export default Search;

const styles = StyleSheet.create({});
