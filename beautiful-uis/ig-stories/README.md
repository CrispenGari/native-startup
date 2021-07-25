### Creating an IG Stories UI

1. Setting up the fonts.
   First install `expo-fonts` as follows:

```
expo install expo-font
```

2. Download the font you want to use [here](https://fonts.google.com/?query=sans)
3. Unzip and move the font's in the `assets/fonts/folder`
4. Now load the fonts by using the `useFonts()` hook

```jsx
const [loaded] = useFonts({
  OpenSansLight: require("./assets/fonts/OpenSans-Light.ttf"),
  OpenSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
  OpenSansSemiBold: require("./assets/fonts/OpenSans-SemiBold.ttf"),
});
```

5. Now you can use it:

```jsx
<Text
  style={{
    fontFamily: "OpenSansSemiBold",
  }}
>
  Hello fonts
</Text>
```

- [Ref](https://docs.expo.io/versions/latest/sdk/font/)
