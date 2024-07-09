import { UserInactivityProvider } from "@/context";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { lazy, useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={34} />
            </TouchableOpacity>
          ),
          headerLargeTitle: true,
          headerTransparent: true,
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity>
                <Ionicons name="notifications-outline" size={30} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="star-outline" size={30} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="lock"
        options={{ headerShown: false, animation: "none" }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

const Layout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <UserInactivityProvider>
      <RootLayout />
    </UserInactivityProvider>
  );
};

export default Layout;
