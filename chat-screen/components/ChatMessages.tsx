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
