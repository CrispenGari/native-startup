import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button: React.FC<any> = ({ title, onPress, containerStyles }) => {
  return (
    <TouchableOpacity
      style={{
        ...containerStyles,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 20,
          fontWeight: "700",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
