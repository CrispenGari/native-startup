import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  focused: boolean;
  Icon: JSX.Element;
}
const TabBarIcon: React.FC<Props> = ({ focused, Icon }) => {
  return <View>{Icon}</View>;
};

export default TabBarIcon;

const styles = StyleSheet.create({});
