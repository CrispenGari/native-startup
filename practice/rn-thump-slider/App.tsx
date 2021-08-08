import React from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

const { width } = Dimensions.get("screen");
const App = () => {
  const [value, setValue] = React.useState<number>(0.6);

  console.log(value);
  return (
    <View style={styles.container}>
      <Slider
        trackStyle={{
          backgroundColor: "gray",
          width: width * 0.8,
        }}
        value={value}
        onValueChange={(value) => setValue(value[0])}
        thumbTintColor="cornflowerblue"
        trackMarks={[0, 0.25, 0.5, 0.75, 1]}
        maximumTrackTintColor="red"
        minimumTrackTintColor="red"
        renderTrackMarkComponent={() => (
          <View
            style={{
              width: 5,
              height: 10,
              backgroundColor: "orange",
            }}
          />
        )}
      />
      <Text>{value.toFixed(2)}</Text>
      <StatusBar hidden />
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
