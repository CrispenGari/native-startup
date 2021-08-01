import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
  Animated,
  Dimensions,
} from "react-native";

import { useFonts } from "expo-font";
import data from "./assets/images";
import Slider from "./components/Slider";
import Tabs from "./components/Tabs";
const { width } = Dimensions.get("screen");

const App = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ref = React.useRef<any>();
  const onTabPress = React.useCallback((tabIndex: any) => {
    ref.current.scrollToOffset({
      offset: tabIndex * width,
    });
  }, []);
  const [loaded, error] = useFonts({
    AssistantExtraLight: require("./assets/fonts/Assistant-ExtraLight.ttf"),
    AssistantLight: require("./assets/fonts/Assistant-Light.ttf"),
    AssistantRegular: require("./assets/fonts/Assistant-Regular.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator color="lightseagreen" size="large" />;
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.FlatList
        ref={ref}
        data={data}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        horizontal
        showsVerticalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <Slider item={item} />}
      />
      <Tabs onTabPress={onTabPress} scrollX={scrollX} data={data} />
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
