import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Animated,
  Dimensions,
} from "react-native";
import data from "./assets/images";
import Card from "./components/Card";
const { width, height } = Dimensions.get("screen");
const App = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width,
          height,
          flex: 1,
        }}
      >
        <Animated.FlatList
          data={data}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Card index={index} scrollX={scrollX} item={item} />
          )}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          bounces={false}
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
        />
      </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
