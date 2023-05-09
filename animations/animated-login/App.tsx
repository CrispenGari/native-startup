import { StatusBar } from "expo-status-bar";
import { Asset } from "expo-asset";
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import * as SplashScreen from "expo-splash-screen";
import Login from "./Login";

const _loadAssetsAsync = async () => {
  const imageAssets = cacheImages([require("./assets/me.jpeg")]);
  await Promise.all([...imageAssets]);
};
const cacheImages = (images: any[]) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [ready, setReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      try {
        await _loadAssetsAsync();
      } catch (error) {
        console.warn(error);
      } finally {
        setReady(true);
      }
    })();
  }, []);
  const onLayoutRootView = React.useCallback(async () => {
    if (ready) {
      await SplashScreen.hideAsync();
    }
  }, [ready]);
  if (!ready) return null;
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <Login />
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
