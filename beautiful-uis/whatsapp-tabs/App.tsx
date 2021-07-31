import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";

import { useFonts } from "expo-font";
import Header from "./components/Header/Header";
import { Tabs } from "./navigation";
import { NavigationContainer } from "@react-navigation/native";

const { height, width } = Dimensions.get("screen");
export default function App() {
  const [loaded, error] = useFonts({
    AssistantExtraLight: require("./assets/fonts/Assistant-ExtraLight.ttf"),
    AssistantLight: require("./assets/fonts/Assistant-Light.ttf"),
    AssistantRegular: require("./assets/fonts/Assistant-Regular.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator color="lightseagreen" size="large" />;
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      <View
        style={{
          flex: 1,
        }}
      >
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height,
  },
});
