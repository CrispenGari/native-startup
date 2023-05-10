### Deep Linking in React Native

In this one we are going to learn the concept of Deep Linking in our application. Here is what we will learn:

1. opening urls from our app using the `expo-linking` and `expo-web-browser`.
2. Open our app from an external link
3. Open our app from an external link and navigate.

### Installation

First let's install all the packages that we need in this whole series:

```shell
npx expo install expo-linking expo-web-browser react-native-screens react-native-safe-area-context react-native-gesture-handler @expo/html-elements
#
yarn add @react-navigation/native  @react-navigation/stack
```

1. Opening URLs

Let's say we want to open a URL called `https://google.com` within our app. We can do it as follows:

```tsx
<Button
  title="Open Google"
  onPress={() => Linking.openURL("https://google.com")}
/>
```

So the above button will open google with the default browser. We can also use an `A` tag from `@expo/htm-elements` as follows:

```ts
import { A } from "@expo/html-elements";
....
<A href="https://google.com">Open Google</A>
```

We can use our Linking api to open, messages, phone logs, mails within the app Here are the examples:

```tsx
<Button
title="Call Us"
onPress={() => Linking.openURL("tel:+123456789")}
/>
<Button
title="SMS Us"
onPress={() => Linking.openURL("sms:+123456789")}
/>
<Button
title="Email Us"
onPress={() => Linking.openURL("mailto:support@expo.dev")}
/>
```

You have noticed that when using `Linking` and `A` tags to open an external url we actually open a default web browser. We might want a behavior where where we just open teh link withing our app. For that we use `expo-web-browser` as follows

```tsx
import * as WebBrowser from "expo-web-browser";

...

 <Button
title="Open Google"
onPress={() => WebBrowser.openBrowserAsync("https://www.google.com/")}
/>
```

You can get the url of your app by using the`useURL` hook as follows

```ts
const url = Linking.useURL();
```

We can check for the parameters that was used to open the app from our `url` as follows:

```ts
const url = Linking.useURL();
if (url) {
  const { hostname, path, queryParams } = Linking.parse(url);
  console.log(
    `Linked to app with hostname: ${hostname}, path: ${path} and data: ${JSON.stringify(
      queryParams
    )}`
  );
}
```

We can test this buy running the following command, when you are using a simulator

```shell
# for custom builds
npx uri-scheme open myapp://somepath/into/app?hello=world --ios
# expo go in development
npx uri-scheme open exp://127.0.0.1:19000/--/somepath/into/app?hello=world --ios
```

When you are using a physical device you open the browser and enter the following in the address bar

```shell
exp://<your_ip_address>:19000/--/somepath/into/app?hello=world
```

You cab also listen to the `url` event using `Linking` as follows

```ts
useEffect(() => {
  Linking.addEventListener("url", ({ url }) => {
    const data = Linking.parse(url);
    console.log(JSON.stringify(data));
  });
}, []);
```

### Deep Linking and React Navigation

Now we want to use this linking thing with react navigation, we are going to create 2 screens which are `Home` and `Settings`

```ts
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
```

To test this on a physical device for you need to open the browser and enter the following in your address bar:

```shell
exp://<your_ip_address>:19000/--/settings
```

This will open your expo app on the `settings` page

```shell
exp://<your_ip_address>:19000/--/home
```

This will open your app in the `home` page

If you have nested navigation your config might be looking as follows:

```ts
const config = {
  screens: {
    Home: {
      screens: {
        Chat: "feed/:sort",
      },
    },
    Profile: "user",
  },
};
```

The screens might be looking as follows:

```shell
function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={ChatScreen} />
    </Tab.Navigator>
  );
}
```

You can read more about that in the docs: https://reactnavigation.org/docs/configuring-links/#passing-params

### Refs

1. https://docs.expo.dev/guides/linking/#handling-links
2. https://reactnavigation.org/docs/configuring-links/
