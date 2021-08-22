/**
 *
 * Using Scroll To Index to do the same task as we did in using The
 * scrollToOffset in the usingScrollToOffset.tsx
 *
 */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { useFetchData } from "./hooks";

const ITEM_SIZE = 80;
const SPACING = 20;
const { width, height } = Dimensions.get("screen");

interface Props {}
const App: React.FunctionComponent<Props> = () => {
  const { data, loading } = useFetchData();
  const backRef = React.useRef<any>();
  const thumbRef = React.useRef<any>();
  const [imageIndex, setImageIndex] = React.useState(0);

  React.useEffect(() => {
    backRef?.current?.scrollToIndex({
      index: imageIndex,
      animation: true,
    });
    if (imageIndex * (ITEM_SIZE + SPACING) - ITEM_SIZE / 2 > width / 2) {
      thumbRef.current?.scrollToOffset({
        offset: imageIndex * (ITEM_SIZE + SPACING) + ITEM_SIZE / 2 - width / 2,
        animated: true,
      });
    } else {
      thumbRef.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  }, [imageIndex]);

  if (loading) {
    <View style={styles.app}>
      <ActivityIndicator color="lightseagreen" size="small" />
    </View>;
  }
  return (
    <View style={styles.app}>
      <StatusBar hidden />
      <FlatList
        data={data}
        ref={backRef}
        keyExtractor={(item) => item.id}
        horizontal
        snapToAlignment="center"
        snapToInterval={width}
        scrollEventThrottle={16}
        pagingEnabled={true}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onMomentumScrollEnd={(
          event: NativeSyntheticEvent<NativeScrollEvent>
        ) => {
          setImageIndex(Math.floor(event.nativeEvent.contentOffset.x / width));
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width,
                height,
              }}
            >
              <Image
                style={[StyleSheet.absoluteFillObject]}
                source={{ uri: item.image }}
              />
            </View>
          );
        }}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        snapToAlignment="center"
        snapToInterval={ITEM_SIZE}
        scrollEventThrottle={16}
        decelerationRate="fast"
        ref={thumbRef}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
        style={{
          paddingHorizontal: SPACING,
          position: "absolute",
          bottom: 20,
        }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={[
                {
                  width: ITEM_SIZE,
                  height: ITEM_SIZE,
                  marginRight: SPACING,
                  borderRadius: 10,
                  borderColor: imageIndex === index ? "white" : "transparent",
                  borderWidth: 3,
                },
                imageIndex === index
                  ? {
                      transform: [{ scale: 1.1 }],
                    }
                  : {},
              ]}
              activeOpacity={0.7}
              onPress={() => setImageIndex(index)}
            >
              <Image
                style={[
                  StyleSheet.absoluteFillObject,
                  {
                    borderRadius: 10,
                    resizeMode: "cover",
                  },
                ]}
                source={{ uri: item.image }}
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
  app: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
