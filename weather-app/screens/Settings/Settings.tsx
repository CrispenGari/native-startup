import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Background } from "../../components";

const Settings: React.FC = () => {
  return (
    <Background customStyles={true}>
      <View
        style={{
          backgroundColor: "black",
          flex: 1,
          width: "100%",
        }}
      >
        <Text>Settings</Text>
      </View>
    </Background>
  );
};

export default Settings;

const styles = StyleSheet.create({});
