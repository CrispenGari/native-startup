import "react-native-gesture-handler";
import { Text, View } from "react-native";
import * as Linking from "expo-linking";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
const Stack = createStackNavigator();
const App = () => {
  const prefix = Linking.createURL("/");
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer
        linking={{
          prefixes: [
            prefix,
            "myapp://",
            "https://myapp.com",
            "https://*.myapp.com",
          ],
          config: {
            screens: {
              Home: "home",
              Settings: "settings",
            },
          },
        }}
      >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
