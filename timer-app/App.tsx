import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Animated,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const AnimationTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const ITEM_WITH = width * 0.5;
const timers = Array(60)
  .fill(0)
  .map((_, i) => i + 1);

const App = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [duration, setDuration] = React.useState(0);

  const timerAnimation = React.useRef(new Animated.Value(height)).current;

  const buttonAnimation = React.useRef(new Animated.Value(0)).current;

  const animation = React.useCallback(() => {
    Animated.sequence([
      Animated.timing(buttonAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(timerAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(timerAnimation, {
        toValue: height,
        duration: duration * 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // buttonAnimation.setValue(0);
      Animated.timing(buttonAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  }, [duration]);

  const opacity = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const translateY = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: "cornflowerblue",
            height,
            width,
            transform: [{ translateY: timerAnimation }],
          },
        ]}
      />
      <Animated.FlatList
        data={timers}
        horizontal
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: ITEM_WITH / 2,
        }}
        style={{
          flexGrow: 0,
        }}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / ITEM_WITH
          );
          setDuration(timers[index]);
        }}
        scrollEventThrottle={16}
        snapToAlignment={"center"}
        decelerationRate="fast"
        pagingEnabled
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
          { useNativeDriver: false }
        )}
        snapToInterval={ITEM_WITH}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index: number) => index.toString()}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_WITH,
            index * ITEM_WITH,
            (index + 1) * ITEM_WITH,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
          });
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
          });

          return (
            <View
              style={{
                width: ITEM_WITH,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Animated.Text
                style={{
                  color: "white",
                  fontSize: 50,
                  fontWeight: "bold",
                  opacity,
                  transform: [{ scale }],
                }}
              >
                {item}
              </Animated.Text>
            </View>
          );
        }}
      />
      <AnimationTouchableOpacity
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "cornflowerblue",
          position: "absolute",
          bottom: 50,
          opacity,
          transform: [{ translateY }],
        }}
        activeOpacity={0.5}
        onPress={animation}
      >
        <Animated.Text
          style={{
            color: "white",
          }}
        >
          Start
        </Animated.Text>
      </AnimationTouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
