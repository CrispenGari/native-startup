import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
  Platform,
  ScrollView,
  RefreshControl,
} from "react-native";
import { useFonts } from "expo-font";
import { COLORS } from "./assets/colors";
import { Header, Stories, Theme } from "./components";

const App: React.FC<any> = () => {
  const [theme, setTheme] = React.useState<string>(COLORS.LIGHT_BACKGROUND);
  const [loaded] = useFonts({
    OpenSansLight: require("./assets/fonts/OpenSans-Light.ttf"),
    OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
    OpenSansSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });
  if (!loaded) {
    return <ActivityIndicator size="large" />;
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
      <SafeAreaView style={styles.safeArea}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default App;
