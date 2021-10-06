### CSS modules in React Native

In this README file we are going to learn how we can use `css` for styling components in React Native.

### Setting Up

We need to install a lot of packages.

1. `babel-plugin-react-native-classname-to-style`

Run the following command to install `babel-plugin-react-native-classname-to-style`

```shell
yarn add babel-plugin-react-native-classname-to-style
```

2. `babel-plugin-react-native-platform-specific-extensions`

Run the following command to install `babel-plugin-react-native-platform-specific-extensions`

```shell
yarn add babel-plugin-react-native-platform-specific-extensions
```

3. `react-native-css-transformer`

Run the following command to install `react-native-css-transformer`

```shell
yarn add react-native-css-transformer
```

### OR

You can install all the packages once by running the following command:

```shell

yarn add babel-plugin-react-native-classname-to-style babel-plugin-react-native-platform-specific-extensions react-native-css-transformer --dev
```

### `babel.config.js`

Next we are going to open the `babel.config.js` file and edit it to look as follows:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-classname-to-style",
      ["react-native-platform-specific-extensions", { extensions: ["css"] }],
    ],
  };
};
```

### `metro.config.js`

Next we will open the `metro.config.js` and edit it to look as follows:

> According to the [docs](https://docs.expo.dev/guides/customizing-metro/): This file need to be created in the root directory of the project.

```js
const { getDefaultConfig } = require("expo/metro-config");
module.exports = (async () => {
  const {
    resolver: { sourceExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-css-transformer"),
    },
    resolver: {
      sourceExts: [...sourceExts, "css"],
    },
  };
})();
```

### `app.json`

Next we will open the `app.json` and edit it to look as follows:

```json
{
  "expo": {
    ...
    "packagerOpts": {
      "config": "metro.config.js",
      "sourceExts": ["js", "jsx", "css"]
    }
  }
}
```

### Starting the expo server

You may need to reset the `cache` by running the following command:

```shell
expo r -c
```
