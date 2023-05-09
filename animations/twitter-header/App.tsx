import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image, Animated, ScrollView } from "react-native";
const HEADER_MAX_HEIGHT = 100;
const HEADER_MIN_HEIGHT = 80;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;

export default function App() {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });
  const profileImageHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const profileImageMarginTop = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [
      HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
      HEADER_MAX_HEIGHT + 5,
    ],
    extrapolate: "clamp",
  });
  const headerZindex = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120],
    outputRange: [0, 0, 1000],
    extrapolate: "clamp",
  });

  const headerTitleBottom = scrollY.interpolate({
    inputRange: [
      0,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26,
    ],
    outputRange: [-20, -20, -20, 5],
    extrapolate: "clamp",
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "cornflowerblue",
          height: headerHeight,
          zIndex: headerZindex,
          elevation: headerZindex,
          alignItems: "center",
        }}
      >
        <Animated.View
          style={{ position: "absolute", bottom: headerTitleBottom }}
        >
          <Text style={{ color: "white", fontSize: 14, fontWeight: "bold" }}>
            Tinashe Crispen
          </Text>
        </Animated.View>
      </Animated.View>

      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <Animated.View
          style={{
            height: profileImageHeight,
            width: profileImageHeight,
            borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
            borderColor: "white",
            borderWidth: 3,
            overflow: "hidden",
            marginTop: profileImageMarginTop,
            marginLeft: 10,
          }}
        >
          <Image
            source={require("./assets/me.jpg")}
            style={{ flex: 1, width: "100%", height: "100%" }}
          />
        </Animated.View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 26, paddingLeft: 10 }}>
            Tinashe Crispen
          </Text>
        </View>

        <View style={{ height: 1000 }} />
      </ScrollView>
    </View>
  );
}
