import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { db, auth } from "../../firebase";
import firebase from "firebase";
import Message from "../../components/Message/Message";
const Chat = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const scrollViewRef = useRef(null);
  const send = () => {
    Keyboard.dismiss();
    if (text) {
      db.collection("groups")
        .doc(route?.params?.id)
        .collection("messages")
        .add({
          displayName: auth?.currentUser?.displayName,
          email: auth?.currentUser?.email,
          photoURL: auth?.currentUser?.photoURL,
          message: text,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          setText("");
        });
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route?.params?.chatName,
      headerTitleAlign: "left",
      headerLeft: () => (
        <View
          style={{
            paddingLeft: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <TouchableOpacity
            style={{
              margin: 10,
            }}
          >
            <Feather name="camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 10,
            }}
          >
            <MaterialIcons name="add-call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = db
      .collection("groups")
      .doc(route?.params?.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setChatMessages(
          snapshot.docs.map((doc) => ({ id: doc?.id, data: doc?.data() }))
        );
      });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <SafeAreaView style={styles.chat}>
      <ScrollView
        style={styles.chat__chats}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        {chatMessages.map((message, index) => (
          <Message
            sent={message?.data?.email === auth?.currentUser?.email}
            key={index}
            message={message}
          />
        ))}
      </ScrollView>
      <KeyboardAvoidingView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 10,
            paddingRight: 10,
          }}
        >
          <TextInput
            placeholder="Type a message..."
            style={styles.input}
            onSubmitEditing={send}
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TouchableOpacity onPress={send}>
            <Ionicons name="send-outline" size={24} color="#2c6bed" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <View style={{ width: 100 }} />
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
    marginHorizontal: 15,
    borderColor: "transparent",
    padding: 10,
    borderRadius: 30,
    color: "gray",
  },
  chat: {
    flex: 1,
  },
  chat__chats: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    flex: 1,
  },
});
