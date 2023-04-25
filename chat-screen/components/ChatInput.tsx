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
