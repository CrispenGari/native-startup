### Lock Screen

In this one we are going to create a lock-screen to lock and unlock the app when a user went to the background for so long. We want to lock the screen when the user stays out of the app for so long. First we are going to create a context that will handle the locking of the screen if the user stays out of the app for long.

```ts
// context.tsx

import { useRouter } from "expo-router";
import React from "react";
import { AppState } from "react-native";
import { MMKV } from "react-native-mmkv";

const storage = new MMKV({
  id: "lock-timer",
});

export const UserInactivityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const appState = React.useRef(AppState.currentState);
  const router = useRouter();
  const isSignedIn = true;

  React.useEffect(() => {
    const subscription = AppState.addEventListener(
      "change",
      async (nextAppState) => {
        if (nextAppState === "background") {
          recordStartTime();
          // blur the screen here
        } else if (
          nextAppState === "active" &&
          appState.current.match(/background/)
        ) {
          const elapsed = Date.now() - (storage.getNumber(":time:") || 0);
          if (elapsed > 3000 && isSignedIn) {
            router.replace("/lock");
          }
        }
        appState.current = nextAppState;
      }
    );
    return () => {
      subscription.remove();
    };
  }, []);

  const recordStartTime = () => {
    storage.set(":time:", Date.now());
  };

  return children;
};
```

We can wrap our app with `UserInactivityProvider` in the `_layout.tsx` file as follows:

```tsx
...
 <UserInactivityProvider>
      <RootLayout />
    </UserInactivityProvider>

```

Next we are going to install `expo-local-authentication` as follows:

```shell
npx expo install expo-local-authentication
```

Next we are going to go to the `app.json` and add it in our `plugins` as follows:

```json
{
  "plugins": [
    [
      "expo-local-authentication",
      {
        "faceIDPermission": "Allow $(PRODUCT_NAME) to use Face ID."
      }
    ]
  ]
}
```

Now in the `app/lock.tsx` we are going to have the following screens:

```ts
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as LocalAuthentication from "expo-local-authentication";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const Page = () => {
  const [code, setCode] = useState<number[]>([]);
  const codeLength = Array(6).fill(0);
  const router = useRouter();

  const offset = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  const OFFSET = 20;
  const TIME = 80;

  useEffect(() => {
    if (code.length === 6) {
      if (code.join("") === "000000") {
        router.replace("/");
        setCode([]);
      } else {
        offset.value = withSequence(
          withTiming(-OFFSET, { duration: TIME / 2 }),
          withRepeat(withTiming(OFFSET, { duration: TIME }), 4, true),
          withTiming(0, { duration: TIME / 2 })
        );
        setCode([]);
      }
    }
  }, [code]);

  const onNumberPress = (number: number) => {
    setCode([...code, number]);
  };

  const numberBackspace = () => {
    setCode(code.slice(0, -1));
  };

  const onBiometricAuthPress = async () => {
    const { success } = await LocalAuthentication.authenticateAsync();
    if (success) {
      router.replace("/");
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.greeting}>Welcome back!</Text>

      <Animated.View style={[styles.codeView, style]}>
        {codeLength.map((_, index) => (
          <View
            key={index}
            style={[
              styles.codeEmpty,
              {
                backgroundColor: code[index] ? "red" : "gray",
              },
            ]}
          />
        ))}
      </Animated.View>

      <View style={styles.numbersView}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {[1, 2, 3].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}
            >
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {[4, 5, 6].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}
            >
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {[7, 8, 9].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}
            >
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={onBiometricAuthPress}>
            <MaterialCommunityIcons
              name="face-recognition"
              size={26}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNumberPress(0)}>
            <Text style={styles.number}>0</Text>
          </TouchableOpacity>

          <View style={{ minWidth: 30 }}>
            {code.length > 0 && (
              <TouchableOpacity onPress={numberBackspace}>
                <Text style={styles.number}>
                  <MaterialCommunityIcons
                    name="backspace-outline"
                    size={26}
                    color="black"
                  />
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "500",
            fontSize: 18,
          }}
        >
          Forgot your passcode?
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 80,
    alignSelf: "center",
  },
  codeView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginVertical: 100,
  },
  codeEmpty: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  numbersView: {
    marginHorizontal: 80,
    gap: 60,
  },
  number: {
    fontSize: 32,
  },
});
export default Page;
```
