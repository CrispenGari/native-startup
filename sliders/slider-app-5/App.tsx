import React from "react";
import { useState } from "react";
import { StyleSheet, View, Animated, StatusBar } from "react-native";
import data from "./assets/images";
import BlurBanner from "./components/Banner";
import Card from "./components/Card";

const App = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <BlurBanner scrollX={scrollX} data={data} />
      <Animated.FlatList
        data={data}
        keyExtractor={({ id }) => id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: true,
          }
        )}
        horizontal
        pagingEnabled
        contentContainerStyle={{
          alignItems: "center",
        }}
        renderItem={({ item, index }) => (
          <Card item={item} index={index} scrollX={scrollX} />
        )}
      />
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
