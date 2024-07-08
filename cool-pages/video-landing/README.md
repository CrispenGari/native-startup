### Video Background

In this one we are going to create a cool landing page which plays a video in the background. First we need to install the following packages:

```shell
npx expo install expo-av expo-asset
```

The following is the landing page component with video playing in the background.

```tsx
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Video, ResizeMode } from "expo-av";
import { useAssets } from "expo-asset";
const Landing = () => {
  const [assets] = useAssets([require("@/assets/videos/bg.mp4")]);

  return (
    <View style={{ flex: 1 }}>
      {!!assets ? (
        <Video
          style={{
            width: "100%",
            position: "absolute",
            flex: 1,
            height: "100%",
          }}
          source={{
            uri: assets[0].uri,
          }}
          resizeMode={ResizeMode.COVER}
          isLooping
          isMuted
          shouldPlay
        />
      ) : (
        <View
          style={{
            width: "100%",
            position: "absolute",
            flex: 1,
            height: "100%",
          }}
        />
      )}
      <View style={{ top: 100, padding: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "700", color: "white" }}>
          Welcome to our app! Get started with coding in not time.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
          bottom: 100,
          gap: 16,
          position: "absolute",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: "#000000",
            borderRadius: 999,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 20, color: "white" }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: "#f5b5b4",
            borderRadius: 999,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 20, color: "white" }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;
```
