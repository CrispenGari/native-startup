import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  SharedValue,
  SlideInDown,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { Ionicons } from "@expo/vector-icons";

const IMG_HEIGHT = 400;
const { width } = Dimensions.get("window");
const Header = ({ scrollOffset }: { scrollOffset: SharedValue<number> }) => {
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.5], [0, 1]),
    };
  }, []);
  return (
    <Animated.View
      style={[
        {
          paddingTop: 50,
          paddingHorizontal: 20,
          flexDirection: "row",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          paddingBottom: 20,
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: "gray",
          zIndex: 1,
          backgroundColor: "white",
          elevation: 3,
        },
        headerAnimatedStyle,
      ]}
    >
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          borderWidth: StyleSheet.hairlineWidth,
          backgroundColor: "#fff",
        }}
      >
        <Ionicons name="chevron-back" size={24} />
      </TouchableOpacity>
      <View style={{ gap: 10, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            borderWidth: StyleSheet.hairlineWidth,
            backgroundColor: "#fff",
          }}
        >
          <Ionicons name="share-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            borderWidth: StyleSheet.hairlineWidth,
            backgroundColor: "#fff",
          }}
        >
          <Ionicons name="heart" size={24} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const Main = () => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 0.9]
          ),
        },
      ],
    };
  }, []);

  return (
    <>
      <Header scrollOffset={scrollOffset} />
      <Animated.ScrollView
        ref={scrollRef}
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Animated.Image
          source={require("./assets/me.jpeg")}
          style={[
            {
              width,
              height: IMG_HEIGHT,
              resizeMode: "cover",
            },
            imageAnimatedStyles,
          ]}
        />
        <View style={{ padding: 10, backgroundColor: "white" }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Tinashe Crispen Garidzira
          </Text>
          <Text style={{ fontSize: 16, color: "gray" }}>Age 24</Text>
          <Text style={{ marginTop: 10, fontSize: 16 }}>
            Enthusiastic and skilled software developer with a passion for
            crafting efficient, maintainable, and scalable solutions. With a
            background in [mention any relevant education or previous
            experience], I specialize in [mention specific technologies or
            programming languages you're proficient in, e.g., Python,
            JavaScript, Java]. My primary goal is to leverage my expertise to
            solve complex problems and deliver high-quality software products
            that meet and exceed client expectations.
          </Text>
          <Text style={{ marginTop: 10, fontSize: 16 }}>
            Enthusiastic and skilled software developer with a passion for
            crafting efficient, maintainable, and scalable solutions. With a
            background in [mention any relevant education or previous
            experience], I specialize in [mention specific technologies or
            programming languages you're proficient in, e.g., Python,
            JavaScript, Java]. My primary goal is to leverage my expertise to
            solve complex problems and deliver high-quality software products
            that meet and exceed client expectations.
          </Text>
          <Text style={{ marginTop: 10, fontSize: 16 }}>
            Enthusiastic and skilled software developer with a passion for
            crafting efficient, maintainable, and scalable solutions. With a
            background in [mention any relevant education or previous
            experience], I specialize in [mention specific technologies or
            programming languages you're proficient in, e.g., Python,
            JavaScript, Java]. My primary goal is to leverage my expertise to
            solve complex problems and deliver high-quality software products
            that meet and exceed client expectations.
          </Text>
        </View>
      </Animated.ScrollView>
    </>
  );
};

const Footer = () => {
  return (
    <Animated.View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        paddingVertical: 30,
        borderTopColor: "gray",
        borderTopWidth: 1,
        gap: 10,
        flexDirection: "row",
        backgroundColor: "white",
      }}
      entering={SlideInDown.delay(200)}
    >
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Software Developer
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          paddingVertical: 10,
          paddingHorizontal: 30,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 20,
            color: "white",
          }}
        >
          Request
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function App() {
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Main />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
