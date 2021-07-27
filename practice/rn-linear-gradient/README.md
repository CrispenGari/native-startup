### React Native Linear Gradient.

In this Readme we are going to learn how to apply linear gradients on a component by creating a simple UI.

### Demo

![img](https://github.com/CrispenGari/native-startup/blob/main/practice/rn-linear-gradient/demos/Screenshot_20210727-085000_Expo%20Go.jpg)

### Installation

```
expo install expo-linear-gradient
```

### Basic Usage

```jsx
<LinearGradient
  colors={["black", "rgba(0, 0, 0, .3)"]}
  style={{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 100,
    padding: 20,
  }}
  start={{
    x: 0,
    y: 1,
  }}
  end={{
    x: 0,
    y: 0,
  }}
>
  <Text
    style={{
      color: "white",
      fontWeight: "bold",
      fontSize: 35,
    }}
  >
    Cute Dogs Gallery
  </Text>
</LinearGradient>
```

### Docs References

1. [Expo](https://docs.expo.io/versions/latest/sdk/linear-gradient/#end)
2. [React Native Linear Gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
