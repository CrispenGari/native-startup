import React from "react";
import { StyleSheet, StatusBar, Animated, SafeAreaView } from "react-native";
import data from "./assets/images";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";
const App = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <StatusBar hidden />
      <Banner data={data} scrollX={scrollX} />
      <Animated.FlatList
        data={data}
        keyExtractor={({ id }) => id.toString()}
        horizontal
        pagingEnabled
        contentContainerStyle={{
          alignItems: "center",
          marginTop: 120,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card item={item} />}
      />
      <Footer scrollX={scrollX} data={data} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
