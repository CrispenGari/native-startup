import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

const ProgressRingChat: React.FC = () => {
  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8],
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "700",
          color: "lightseagreen",
          width: "100%",
          textAlign: "center",
          padding: 10,
        }}
      >
        Progress Ring
      </Text>
      <ProgressChart
        data={{
          labels: ["coding", "eating", "sleeping", "watering", "cooking"],
          data: [0.8, 0.9, 0.2, 0.4, 0.3],
        }}
        width={Dimensions.get("window").width}
        height={Dimensions.get("window").height * 0.5}
        strokeWidth={10}
        fromZero
        radius={10}
        chartConfig={{
          backgroundGradientFrom: "#1E2923",
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: "#08130D",
          backgroundGradientToOpacity: 0.5,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 3, // optional, default 3
          barPercentage: 1,
          //   useShadowColorFromDataset: true, // optional
          propsForDots: {
            r: "2", // size of the marker
            strokeWidth: "2",
            stroke: "yellow",
          },
        }}
        hideLegend={false}
        style={{
          marginBottom: 30,
        }}
      />
    </View>
  );
};

export default ProgressRingChat;

const styles = StyleSheet.create({});
