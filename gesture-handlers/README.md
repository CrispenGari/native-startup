### Gesture Handlers

In this `README` file we are going to learn how we can detect, `gestures` in a `react-native` application managed using `expo` using `react-native-gesture-handler`. First we need to install `react-native-gesture-handler` by running the following command:

```shell
npx expo install react-native-gesture-handler
```

### Gestures

1. `Tap`

Let's listen to the click on the `view` and every time we click in that `div` we are going to append a red `dot` to the position where the user has `clicked`.

```ts
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const App = () => {
  const [points, setPoints] = React.useState<
    Array<{
      x: number;
      y: number;
    }>
  >([]);
  const tap = Gesture.Tap().onStart((e) => {
    console.log(e);
    setPoints((state) => [
      ...state,
      {
        x: e.x,
        y: e.y,
      },
    ]);
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <GestureDetector gesture={tap}>
        <View
          style={{
            width: 300,
            height: 200,
            backgroundColor: "cornflowerblue",
            borderRadius: 5,
            margin: 20,
            position: "relative",
          }}
        >
          {points.map(({ x, y }, index) => (
            <View
              key={index}
              style={{
                width: 20,
                height: 20,
                borderRadius: 20,
                backgroundColor: "red",
                position: "absolute",
                top: y,
                left: x,
              }}
            />
          ))}
        </View>
      </GestureDetector>
    </View>
  );
};
```

2. `LongPress`

```ts
const longPress = Gesture.LongPress().onStart((e) => {
  console.log("Long Press");
});

...

<GestureDetector gesture={longPress}>
    <View
        style={{
        width: 300,
        height: 200,
        backgroundColor: "cornflowerblue",
        borderRadius: 5,
        margin: 20,
        position: "relative",
        }}
    ></View>
</GestureDetector>
```

3. `Fling`

```ts
const gesture = Gesture.Fling().onStart((e) => {
  console.log("fling");
});
return (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <GestureDetector gesture={gesture}>
      <View
        style={{
          width: 300,
          height: 200,
          backgroundColor: "cornflowerblue",
          borderRadius: 5,
          margin: 20,
          position: "relative",
        }}
      ></View>
    </GestureDetector>
  </View>
);
```

4. `Pinch`

Listens to the `pinch` event, let's create a simple `pitch` app that will scale the `View` when pinched.

```ts
const [scale, setScale] = React.useState<number>(1);
const gesture = Gesture.Pinch().onStart((e) => {
  console.log(e);
  setScale(e.scale);
});
return (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={{
          width: 300,
          height: 200,
          backgroundColor: "cornflowerblue",
          borderRadius: 5,
          margin: 20,
          position: "relative",
          transform: [{ scale }],
        }}
      ></Animated.View>
    </GestureDetector>
  </View>
);
```

There are many gestures that can be found [here](https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/pinch-gesture).

### Refs

1. [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/api/gestures/pinch-gesture)
