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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
