import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Background } from "../../components";

const Settings: React.FC<any> = ({ navigation }) => {
  return (
    <Background customStyles={true}>
      <View
        style={{
          backgroundColor: "black",
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          No Settings, Navigate To
        </Text>

        <View style={{ height: 10 }} />
        <Button
          title="Home"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <Button
          title="Statistics"
          onPress={() => {
            navigation.navigate("Stats");
          }}
        />
        <Button
          title="Temperature"
          onPress={() => {
            navigation.navigate("Temperature");
          }}
        />
        <Button
          title="Wind"
          onPress={() => {
            navigation.navigate("Wind");
          }}
        />
        <Button
          title="Search"
          onPress={() => {
            navigation.navigate("Search");
          }}
        />
      </View>
    </Background>
  );
};

export default Settings;

const styles = StyleSheet.create({});
