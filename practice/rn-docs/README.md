### React Native Components.

In this Readme I'm going to explore some cool features of react native, by just going through the docs.

1. Alert

There are two types of alerts, the `prompt` and `alert`

a. `Alert.alert()`

```ts
const App = () => {
  const openAlert = () => {
    Alert.alert("Quit app.", "Are you sure you want to quit the app?", [
      {
        style: "cancel",
        text: "cancel",
        onPress: () => console.log("cancel"),
      },
      {
        style: "default",
        text: "yes",
        onPress: () => console.log("yes"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Button title="Open" onPress={openAlert} />
    </View>
  );
};
```

b. Alert.prompt()

- [Docs](https://reactnative.dev/docs/alert)

2. The Appearance
   Getting the color theme

```ts
console.log(Appearance.getColorScheme());
```

3. AppState.
   Helps us to track if the user is using the application or not.

```ts
const App = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const appState = AppState.addEventListener("change", (state) => {
      setIsActive(state === "active");
    });
    return () => appState;
  }, []);
  console.log(isActive === true);
  return (
    <View style={styles.container}>
      <Text> {isActive ? "Online" : "Offline"}</Text>
    </View>
  );
};
```

4. Linking
   Opening urls in a native app.

```ts
const openGoogle = async () => {
  await Linking.openURL("https://www.google.com");
};
return (
  <View style={styles.container}>
    <Button title="openGoogle" onPress={openGoogle} />
  </View>
);

// Linking.openSettings();
```

- [Docs](https://reactnative.dev/docs/linking)

6. Platform

- Getting the current platform

```ts
console.log(Platform.OS, Platform.Version, Platform.isTV);
```
