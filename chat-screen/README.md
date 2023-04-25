### chat-screen

In this one we are going to create a simple Chat Screen. Chat screen contains two components which are:

1. chat messages

This is where the chat messages will be listed.

```ts
import { Text, ScrollView, SafeAreaView, Keyboard, View } from "react-native";
import React from "react";

const ChatMessages: React.FC<{ messages: string[] }> = ({ messages }) => {
  const ref = React.useRef<ScrollView>();
  React.useEffect(() => {
    const subscription1 = Keyboard.addListener("keyboardDidShow", () => {
      ref.current?.scrollToEnd({ animated: true });
    });
    const subscription2 = Keyboard.addListener("keyboardDidHide", () => {
      ref.current?.scrollToEnd({ animated: true });
    });
    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        ref={ref as any}
        style={{ flex: 1, padding: 10 }}
        onContentSizeChange={() => {
          ref.current?.scrollToEnd({ animated: true });
        }}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((_, i) => (
          <View
            key={i}
            style={{
              borderRadius: 5,
              maxWidth: "70%",
              alignSelf: i % 2 === 0 ? "flex-end" : "flex-start",
              padding: 10,
              marginBottom: 5,
              backgroundColor: i % 2 === 0 ? "green" : "red",
            }}
          >
            <Text style={{ color: "white" }}>{_}</Text>
          </View>
        ))}
        <View style={{ height: 10 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatMessages;
```

2. chat input

This is where we are going to type the messages.

```ts
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";

const ChatInput: React.FunctionComponent<{
  onPress: () => void;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}> = ({ onPress, message, setMessage }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#f5f5f5" }}>
      <View
        style={{
          alignItems: "flex-start",
          flexDirection: "row",
          backgroundColor: "#f5f5f5",
          paddingTop: 10,
          paddingHorizontal: 10,
          marginBottom: 3,
        }}
      >
        <TextInput
          value={message}
          onChangeText={(text) => setMessage(text)}
          placeholder="type message..."
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: "white",
            borderRadius: 999,
          }}
        />
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          style={{
            width: 50,
            marginLeft: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "cornflowerblue",
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Text>send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatInput;
```

Here is how the chat screen will look like:

```ts
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
```

Output:

<p align="center">
<img src="/1.jpeg" alt="demo" width="200"/>
</p>
