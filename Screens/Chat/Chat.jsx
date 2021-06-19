import React, { useLayoutEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { db, auth } from "../../firebase";
import firebase from "firebase";

const Chat = ({ navigation, route }) => {
  const [message, setMessage] = useState("");
  const send = () => {
    Keyboard.dismiss();
    if (message) {
      db.collection("groups")
        .doc(id)
        .collection("messages")
        .add({
          displayName: auth?.currentUser?.displayName,
          email: auth?.currentUser?.email,
          photoURL: auth?.currentUser?.photoURL,
          message: message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => setMessage(""));
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route?.params?.chatName,
      headerLeft: () => (
        <View
          style={{
            paddingLeft: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            margin: 10,
          }}
        >
          <Feather name="more-vertical" size={30} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        padding: 10,
        flex: 1,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
        style={{
          flex: 1,
        }}
      >
        <TouchableWithoutFeedback
          style={{ height: 500 }}
          onPress={() => Keyboard.dismiss()}
        >
          <>
            <ScrollView>
              <Text>{route?.params?.id}</Text>
            </ScrollView>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="Type a message..."
                style={styles.input}
                onSubmitEditing={send}
                value={message}
                onChangeText={(text) => setMessage(text)}
              />
              <TouchableOpacity onPress={send}>
                <Ionicons name="send-outline" size={24} color="#2c6bed" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: "#cecece",
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: "transparent",
    padding: 10,
    borderRadius: 30,
    color: "gray",
  },
});
