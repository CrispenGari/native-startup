### Stack Navigation

In this one we are going to go through how we can implement the stack navigation using the `expo-router`. First we are going to initilize our project as follows:

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

1. `login.tsx`
2. `register.tsx`
3. `_layout.tsx`
4. `index.tsx`

In the `/app/_layout.tsx` we are going to have the following code in it.

```ts
import { Stack } from "expo-router/stack";

export default function Layout() {
  return <Stack />;
}
```

With this basic layout our tabs will be able to show. Let's go and customize our screens.

```tsx
import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="index" />
    </Stack>
  );
}
```

### Modal.

We can create a screen that can work as a modal. Let's create a file named `options.tsx` and add the following code to it.

```tsx
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const OptionsModal = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href={"/login"} asChild replace>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            marginVertical: 20,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/login"} asChild replace>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            marginVertical: 20,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Register</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default OptionsModal;
```

In the `_layout.tsx` we are going to add the following code.

```tsx
import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen
        name="options"
        options={{ presentation: "modal", animation: "slide_from_bottom" }}
      />
    </Stack>
  );
}
```

You can do a lot of customization. You can read more in the [doccumentation.](https://docs.expo.dev/router/advanced/stack/)
