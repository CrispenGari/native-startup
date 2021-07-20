import React from "react";
import { StyleSheet } from "react-native";
import Drawer from "../Drawer/Drawer";
const Search: React.FC<any> = (props) => {
  return <Drawer routeName={props.route?.name} />;
};

export default Search;

const styles = StyleSheet.create({});
