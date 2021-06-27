import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Tab, TabView, Text } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Tab value={index} onChange={setIndex}>
        <Tab.Item title="recent" />
        <Tab.Item title="favorite" />
        <Tab.Item title="cart" />
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
