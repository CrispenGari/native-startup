import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
const background = require("../../assets/background.jpg");
const Background: React.FC = ({ children }) => {
  return (
    <ImageBackground style={styles.container} source={background}>
      {children}
    </ImageBackground>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
