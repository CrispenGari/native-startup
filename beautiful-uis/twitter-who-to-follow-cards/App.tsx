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
} from "react-native";
import { COLORS } from "./assets/colors";
import { Stories, Theme, Header, Suggestions } from "./components";

const App = () => {
  const [theme, setTheme] = React.useState<string>(COLORS.LIGHT_BACKGROUND);
  const [loading, setLoading] = React.useState(false);

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
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme,
        },
      ]}
    >
      <StatusBar style={theme === COLORS.LIGHT_BACKGROUND ? "dark" : "light"} />
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
        {/*  */}
        <Theme setTheme={setTheme} />
        {/* Who to follow */}
        <Suggestions theme={theme} />
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
