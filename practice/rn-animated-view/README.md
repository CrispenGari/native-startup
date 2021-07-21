### Creating modals using Animated View in react native.

We are going to use the Animated React Native to create some modals in this README.md that we can modify around when working with projects.

1. A modal that slides from bottom.

```js
import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Button,
} from "react-native";

const Modal = ({ open }) => {
  const modalAnimated = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    if (open) {
      Animated.timing(modalAnimated, {
        toValue: 1,
        delay: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimated, {
        toValue: 0,
        delay: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [open]);

  const height = Dimensions.get("screen").height;
  const modalY = modalAnimated.interpolate({
    inputRange: [0, 1],
    /*
    when the range is 0, then the modal should be hidden else it should 
    be shown
    */
    outputRange: [height, height - 280],
  });
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        paddingTop: 25,
      }}
    >
      <Animated.View
        style={{
          width: "100%",
          position: "absolute",
          left: 0,
          backgroundColor: "black",
          padding: 20,
          right: 0,
          top: modalY,
          height: 280,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontWeight: "500",
            width: "100%",
          }}
        >
          Content goes here
        </Text>
      </Animated.View>
    </View>
  );
};

const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Modal open={open} />
      <Button onPress={() => setOpen((prev) => !prev)} title="Toggle Modal" />
    </View>
  );
};

export default App;
```

2. A modal that slides from the top
   This is similar to what we have done from the previous modal we are only going to change the `modalAnimated.interpolate()` outputRange property values

```js
const height = Dimensions.get("screen").height;
const modalY = modalAnimated.interpolate({
  inputRange: [0, 1],
  outputRange: [-height, 0],
});
```

3. The opacity modal
   The rest of the code will remain the same. We will only change the `Modal` component to have the following code in it:

```js
const Modal = ({ open }) => {
  const modalAnimated = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    if (open) {
      Animated.timing(modalAnimated, {
        toValue: 1,
        delay: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimated, {
        toValue: 0,
        delay: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [open]);

  const height = Dimensions.get("screen").height;
  const modalOpacity = modalAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        paddingTop: 25,
      }}
    >
      <Animated.View
        style={{
          width: "100%",
          position: "absolute",
          left: 0,
          backgroundColor: "black",
          padding: 20,
          right: 0,
          height: height,
          opacity: modalOpacity,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontWeight: "500",
            width: "100%",
          }}
        >
          Content goes here
        </Text>
      </Animated.View>
    </View>
  );
};
```

### Ref

- [React Native Docs](https://reactnative.dev/docs/animated)
