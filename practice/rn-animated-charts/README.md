### React native animated chats

We are going to learn how to use the react native animated chats library to create some chats. The code that i will be using is coming from [their](https://github.com/rainbow-me/react-native-animated-charts) repository. In my case I'm using expo. First we need to install all the dependencies that the library need.

### Installation

1. Install the library

```
yarn add @rainbow-me/animated-charts
```

2. Install `react-native-svg` it is also required

```
yarn add react-native-svg
```

3. Install reanimated library
   This library is required as they mentioned in their doc. If you are working on a react native you have to follow steps [here](https://docs.swmansion.com/react-native-reanimated/docs/next/installation). In my case im using the `expo` sdk so i will do it as follows:

```
expo install react-native-reanimated
```

Then:
In the `babel.config.js` add the following. Note this is again what the [expo](https://docs.expo.io/versions/latest/sdk/reanimated/) documentation tell us to do:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};
```

> Note: If you load other Babel plugins, the Reanimated plugin has to be the last item in the plugins array. - `Expo`

Then restart the server and start writing some code!!
