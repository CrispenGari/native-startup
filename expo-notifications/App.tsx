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

  console.log({ token });
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

      <Button
        title="Hello"
        onPress={async () => {
          await Notifications.setNotificationChannelAsync("new-emails", {
            name: "E-mail notifications",
            sound: "notification.wav", // Provide ONLY the base filename
            importance: Notifications.AndroidImportance.HIGH,
            enableVibrate: true,
          });

          await Notifications.scheduleNotificationAsync({
            content: {
              title: "You've got mail! 📬",
              sound: "notification.wav", // Provide ONLY the base filename
              body: "hello there",
            },
            trigger: {
              seconds: 2,
              channelId: "new-emails",
            },
          });
        }}
      />
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
