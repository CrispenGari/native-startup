import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  Icon: JSX.Element;
  bottom: number;
  backgroundColor: string;
  containerStyles?: any;
}
const Button: React.FC<Props> = ({
  Icon,
  bottom,
  backgroundColor,
  containerStyles,
}) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        bottom,
        zIndex: 10,
        right: 20,
        backgroundColor,
        ...containerStyles,
      }}
    >
      {Icon}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
