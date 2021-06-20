import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Button, Input } from "react-native-elements";

import { db } from "../../firebase";
import firebase from "firebase";

const NewChart = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Create a new Chat",
    });
  }, [navigation]);
  const [name, setName] = useState("");
  const createChat = () => {
    db.collection("groups")
      .add({
        name: name,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setName("");
        navigation.replace("Home");
      })
      .catch((err) => alert("Failed to create a group."));
  };
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Input
        autoFocus
        placeholder="Chat name..."
        style={{ color: "white" }}
        inputStyle={{
          borderWidth: 1,
          padding: 5,
          borderRadius: 5,
          backgroundColor: "black",
          textAlign: "center",
        }}
        onSubmitEditing={createChat}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Button
        title="Create"
        buttonStyle={{
          marginVertical: 20,
          width: 300,
        }}
        type="outline"
        onPress={createChat}
      />
      <View style={{ height: 50 }} />
    </KeyboardAvoidingView>
  );
};

export default NewChart;

const styles = StyleSheet.create({});
