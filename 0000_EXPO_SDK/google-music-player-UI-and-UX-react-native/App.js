import React from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { Header, Footer } from "./Components";
import { MusicListScreen, MusicPlayerScreen } from "./Screens";
import { styles } from "./AppStyles";
// import { Audio } from "expo-av";
import {
  NativeRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-native";

export default function App() {
  // disabling yellow box
  console.disableYellowBox = true;
  return (
    <View style={styles.container}>
      <Text>React Native Player </Text>
      <Router>
        <Header />
        <Switch>
          <Route path="/music">
            <MusicListScreen />
            <Footer setPlay />
          </Route>
          <Route path="/">
            <MusicPlayerScreen />
          </Route>
        </Switch>
      </Router>
    </View>
  );
}
