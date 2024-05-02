### Drawer Navigation

In this one we are going to go through how we can implement the drawer navigation using the `expo-router`. First we are going to initilize our project as follows:

```shell
npx create-expo-app -t expo-template-blank-typescript
```

We are going to do the manual-setup of the expo-router following [this guide.](https://docs.expo.dev/router/installation/#manual-installation)

1. First we need to install the following packages:

```shell
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

2. We are going to create a folder called `app` in our project and set the `main` in the `package.json` to

```json
{
  "main": "expo-router/entry"
}
```

We are going to delete the `App.tsx` and create a file called `_layout.tsx` in the `app` folder and add the following code in it.

```tsx
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer />
    </GestureHandlerRootView>
  );
}
```

After that we need to install the following packages

```shell
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

And we are going to open the `babel.config.js` and add the following plugin:

```ts
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};
```

Now we can start creating our screens. We are going to use the `file-based-routing` which is what expo-router uses under the hood. We are going to open the `app/index.tsx` and add the following code in it:

```tsx
import { View, Text } from "react-native";
import React from "react";

const Page = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Page</Text>
    </View>
  );
};

export default Page;
```

Before starting the server we need to open the `app.json` and add the `scheme` property:

```json
{
  "expo": {
    "name": "drawer",
    "scheme": "drawer",
    ...
  }
}
```

You will notice that every file that is located in the `app` will be a drawer page. We can add as many pages
as we want. We are just going to create two more files which are `settings` and `profile`. You can customize the drawer navigator as much as you want, the following shows a basic drawer navigato customization.

```tsx
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="profile"
        screenOptions={{ drawerHideStatusBarOnOpen: true, drawerType: "front" }}
      >
        <Drawer.Screen
          name="index"
          options={{
            headerShown: true,
            headerTitle: "Home",
            drawerLabel: "Feed",
          }}
        />
        <Drawer.Screen name="profile" />
        <Drawer.Screen name="settings" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
```

### Creating a custom Drawer

In this section we are going to go step by step implementation of the custom drawer rather than using the default drawer.

In the `index.tsx` we want to create a method that will open the drawer when the text has been clicked. We can use the `useNavigation` hook to get the navigation object in this page.

```tsx
import { View, Text } from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const Page = () => {
  const navigation = useNavigation();
  const open = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={open}>Open Drawer</Text>
    </View>
  );
};
export default Page;
```

In our `_layout.tsx` we are going to add a `drawerContent` prop to the `Drawer` and create a `CustomDrawer` that will take ion the props that we recieve from the navigation.

```tsx

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        initialRouteName="profile"
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          drawerType: "front",
          drawerActiveTintColor: "white",
          drawerActiveBackgroundColor: "red",
          drawerInactiveTintColor: "white",
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name="index"
          options={{
            headerShown: true,
            headerTitle: "Home",
            drawerLabel: "Feed",
          }}
        />
        <Drawer.Screen name="profile" />
        <Drawer.Screen name="settings" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
....

```

We are not going to do much of customization on our `CustomDrawer` but here is the code.

```tsx
const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { bottom, top } = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "black", position: "relative" }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            paddingTop: 30 + top,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 30,
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            marginBottom: 30,
          }}
        >
          <Image
            source={require("../assets/icon.png")}
            style={{
              marginVertical: 30,
              width: 130,
              height: 130,
              borderRadius: 130,
            }}
          />
          <Text style={{ color: "white" }}>You are logged in</Text>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label={"Sign Out"}
          onPress={() => router.replace("/")}
          labelStyle={{ color: "white" }}
        />
      </DrawerContentScrollView>
      <SafeAreaView>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            padding: 10,
            bottom,
          }}
        >
          <Text style={{ textAlign: "center", color: "gray" }}>
            This is my custom footer
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
```
