import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Button } from "react-native";
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Open Modal" />
    </View>
  );
};
export default () => <App />;
