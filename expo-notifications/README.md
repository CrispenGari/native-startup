### Expo Notifications

In this `README` we are going to learn how to implement, notification in a react native `expo` application. We are going to follow the example that they used in the [`documentation`](https://docs.expo.dev/versions/latest/sdk/notifications/#installation).

### Installation

We will first need to install the packages that we are going to use in this project.

```shell
npx expo install expo-device expo-notifications
```

### Importing `Notifications`

To import `Notifications` from `expo-notifications` differs depending on what language are we currently using. In `javascript` you can import it as follows:

```js
import * as Notifications from "expo-notifications";
```

However in `typescript` you have to import it as follows:

```ts
import * as Notifications from "./node_modules/expo-notifications/src";
```

After that we are going to create a function that will allow us to send push notifications when it is triggered and this function will be located in the `utils/index.ts` file and looks as follows:

```js
export const sendPushNotification = async (
  expoPushToken: string,
  title: string,
  body: string
) => {
  const message = {
    to: expoPushToken,
    sound: "default",
    title,
    body,
    data: { testData: "test data" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
};
```

### Notifying

Now we can implement the basic notification, that will send notification on `button` press. In our `App.tsx` we are going to have the following code in it.

```ts
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "./node_modules/expo-notifications/src";
import { useEffect, useState } from "react";
import { sendPushNotification } from "./utils";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const App = () => {
  const [token, setToken] = useState();
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      (async () => {
        if (Device.isDevice) {
          const { status: existingStatus } =
            await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== "granted") {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== "granted") {
            alert("Failed to get push token for push notification!");
            return;
          }
          const { data } = await Notifications.getExpoPushTokenAsync();
          setToken(data as any);
        } else {
          alert("Must use physical device for Push Notifications");
        }

        if (Platform.OS === "android") {
          Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#FF231F7C",
          });
        }
      })();
    }

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {token && (
        <Button
          onPress={() => {
            return sendPushNotification(
              token,
              "Greeting",
              "Hello there 🎈🎆✨"
            );
          }}
          title="Send"
        />
      )}
      <StatusBar style="auto" />
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
```

> Now if you click the button you will be able to see a notification popping up.

### Refs

1. [expo-notifications](https://docs.expo.dev/versions/latest/sdk/notifications/#installation)
