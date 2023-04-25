import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";

const Chat = () => {
  const [messages, setMessages] = React.useState<Array<string>>([]);
  const [message, setMessage] = React.useState<string>("");

  const sendMessage = () => {
    if (!!!message) return;
    setMessages((state) => [...state, message]);
    setMessage("");
  };
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ChatMessages messages={messages} />
        <ChatInput
          onPress={sendMessage}
          message={message}
          setMessage={setMessage}
        />
      </KeyboardAvoidingView>
    </View>
  );
};
export default Chat;
