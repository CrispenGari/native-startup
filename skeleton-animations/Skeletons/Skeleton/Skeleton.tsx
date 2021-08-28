import React from "react";
import { StyleSheet, View } from "react-native";

const Skeleton: React.FC<{ type: string; theme: "dark" | "light" }> = ({
  type,
  theme,
}) => {
  switch (type) {
    case "avatar":
      return (
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            marginRight: 10,
            backgroundColor: theme === "dark" ? "#777" : "#ddd",
            marginVertical: 5,
          }}
        />
      );
    case "icon":
      return (
        <View
          style={{
            width: 8,
            height: "70%",
            borderRadius: 5,
            backgroundColor: theme === "dark" ? "#777" : "#ddd",
            marginHorizontal: 10,
          }}
        />
      );
    case "post":
      return (
        <View
          style={{
            height: 400,
            borderRadius: 5,
            marginBottom: 5,
            backgroundColor: theme === "dark" ? "#777" : "#ddd",
            marginHorizontal: 5,
          }}
        />
      );
    case "header":
      return (
        <View
          style={{
            width: "50%",
            height: 10,
            borderRadius: 5,
            marginBottom: 5,
            backgroundColor: theme === "dark" ? "#777" : "#ddd",
          }}
        />
      );
    case "text":
      return (
        <View
          style={{
            width: "100%",
            height: 6,
            borderRadius: 5,
            marginBottom: 5,
            backgroundColor: theme === "dark" ? "#777" : "#ddd",
          }}
        />
      );
    case "link":
      return (
        <View
          style={{
            height: 15,
            borderRadius: 5,
            marginBottom: 5,
            marginHorizontal: 5,
            backgroundColor: theme === "dark" ? "#777" : "#ddd",
          }}
        />
      );
    case "text__small":
      return (
        <View
          style={{
            width: "50%",
            height: 6,
            borderRadius: 5,
            marginBottom: 5,
            backgroundColor: theme === "dark" ? "#777" : "#ddd",
          }}
        />
      );
    default:
      return <View />;
  }
};

export default Skeleton;

const styles = StyleSheet.create({});
