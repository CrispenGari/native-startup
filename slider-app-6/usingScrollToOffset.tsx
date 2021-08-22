/*
 Using scrollToOffset to do the same task as what we did in the App.tsx
*/

import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { SliderI, useFetchData } from "./hooks";

const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = 80;
const SPACING = 10;
const App: React.FC = () => {
  const { data, loading } = useFetchData();
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const bannerRef = React.useRef<any>();
  const thumbRef = React.useRef<any>();

  const scrollSomething = (index: number) => {
    setActiveIndex(index);
    bannerRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    if (index * (ITEM_SIZE + SPACING) - ITEM_SIZE / 2 > width / 2) {
      thumbRef.current?.scrollToOffset({
        offset: index * (ITEM_SIZE + SPACING) - width / 2 + ITEM_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="lightseagreen" size="small" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <FlatList
        data={data}
        ref={bannerRef}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        style={{
          width,
          height,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        onMomentumScrollEnd={(
          event: NativeSyntheticEvent<NativeScrollEvent>
        ) => {
          setActiveIndex(Math.floor(event.nativeEvent.contentOffset.x / width));
        }}
        decelerationRate="fast"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        // onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
        //   scrollSomething(
        //     Math.floor(event.nativeEvent.contentOffset.x / width)
        //   );
        // }}
        bounces={false}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width,
                height,
              }}
            >
              <Image source={{ uri: item.image }} style={{ width, height }} />
            </View>
          );
        }}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        decelerationRate="fast"
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingHorizontal: SPACING,
        }}
        style={{
          position: "absolute",
          bottom: 20,
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        ref={thumbRef}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => scrollSomething(index)}
              style={{
                width: ITEM_SIZE,
                height: ITEM_SIZE,
                borderRadius: 16,
                marginRight: SPACING,
                borderWidth: 2,
                overflow: "hidden",
                borderColor: index === activeIndex ? "white" : "transparent",
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  borderRadius: 16,
                  width: ITEM_SIZE,
                  height: ITEM_SIZE,
                  resizeMode: "cover",
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});
