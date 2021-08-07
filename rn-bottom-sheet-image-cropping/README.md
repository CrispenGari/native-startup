### Bottom Sheet and Image Cropping

In this we are going to create a simple application that looks as follows:

### Demo

![img](https://github.com/CrispenGari/native-startup/blob/main/rn-bottom-sheet-image-cropping/Screenshot_20210807-204301_Expo%20Go.jpg)

### Installation of required packages

1. `expo-image-picker`

```
expo install expo-image-picker
```

2. `react-native-bottom-sheet`

Install:

```
yarn add @gorhom/bottom-sheet@^3
```

Then:

```
yarn add react-native-reanimated react-native-gesture-handler
```

Then go to the _`babel.config.js`_ and make sure it looks as follows:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".json"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
```

Then run:

```
expo r -c
```

### Documentation and Refs

- [react-native-bottom-sheet](https://gorhom.github.io/react-native-bottom-sheet/)
- [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
