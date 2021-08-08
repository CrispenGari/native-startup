### Thump Slider - `react-native-slider`

This is a demo on how to use the `thump` slider in react native using a cool package called `react-native-slider` found [here](https://github.com/miblanchard/react-native-slider).

### Demo

![img]()

### Installation

```
yarn add @miblanchard/react-native-slider
```

### Docs

- [here](https://github.com/miblanchard/react-native-slider)

### Bonus - `React Native Activity Indicators`

### Installation

```
yarn add react-native-indicators
```

### Code

```jsx
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators";
export default function App() {
  return (
    <View style={styles.container}>
      <DotIndicator color="gray" />
      <BarIndicator color="gray" />
      <BallIndicator color="gray" />
      <MaterialIndicator color="gray" />
      <PacmanIndicator color="gray" />
      <SkypeIndicator color="gray" />
      <PulseIndicator color="gray" />
      <UIActivityIndicator color="gray" />
      <WaveIndicator color="gray" />
      <StatusBar style="auto" />
    </View>
  );
}
```

### Demo

![img]()

- [Ref](https://github.com/n4kz/react-native-indicators)
