import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
const background = require("../../assets/background.jpg");
const Background: React.FC<any> = ({ children, customStyles }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={customStyles ? null : background}
    >
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
