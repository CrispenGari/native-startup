### Tabs Navigation

In this one we are going to go through how we can implement the tabs navigation using the `expo-router`. First we are going to initilize our project as follows:

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

3. We are going to delete the `App.tsx` and create a file called `_layout.tsx` in the `app` folder and add the following code in it.

```tsx
import { Stack } from "expo-router/stack";

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
```

After that we need to install the following packages

```shell
npx expo install react-native-gesture-handler react-native-reanimated
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

We are going to create a folder named `(tabs)` and in that folder each and every file that we are going to create is going to be a page/screen. We are going to create the following files:

1. `index.tsx`
2. `profile.tsx`
3. `settings.tsx`
4. `_layout.tsx`

In the `/app/(tabs)/layout.tsx` we are going to have the following code in it.

```ts
import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
```

With this basic layout our tabs will be able to show. Let's go and customize our tabs.

```tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { height: 80 },
        tabBarActiveTintColor: "green",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon({ color, size }) {
            return <Ionicons name="home" color={color} size={size} />;
          },
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon({ color, size }) {
            return <Ionicons name="person" color={color} size={size} />;
          },
          tabBarLabel: "Me",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon({ color, size }) {
            return <Ionicons name="settings" color={color} size={size} />;
          },
          tabBarLabel: "Configurations",
        }}
      />
    </Tabs>
  );
}
```

You can do a lot of customization. You can read more in the [doccumentation.](https://docs.expo.dev/router/advanced/tabs/)
