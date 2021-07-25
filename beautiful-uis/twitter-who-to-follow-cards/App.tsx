import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
} from "react-native";
import { COLORS } from "./assets/colors";
import { Stories, Theme, Header } from "./components";
import Font, { useFonts } from "expo-font";
import { useEffect } from "react";
const App = () => {
  const [theme, setTheme] = React.useState<string>(COLORS.LIGHT_BACKGROUND);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        OpenSansLight: require("./assets/fonts/OpenSans-Light.ttf"),
        OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
        OpenSansSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
      })
        .then(() => setLoading(false))
        .catch((err) => console.log(err));
    })();
  }, []);
  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        style={{
          width: 50,
          height: 50,
        }}
      />
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? 25 : 0,
        }}
      >
        <Header theme={theme} />
      </SafeAreaView>

      <ScrollView
        style={{
          flex: 1,
          width: "100%",
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            size={20}
            style={{
              borderColor: "gray",
              borderStyle: "solid",
              borderWidth: 3,
            }}
          />
        }
      >
        {/* Stories */}
        <Stories theme={theme} />
        {/* Theme Changer */}
        <Theme setTheme={setTheme} />
      </ScrollView>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
