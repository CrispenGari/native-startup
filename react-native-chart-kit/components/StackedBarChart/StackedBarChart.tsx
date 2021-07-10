import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { StackedBarChart } from "react-native-chart-kit";
const StackedBars: React.FC = () => {
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
        Stacked Bar Chart
      </Text>
      <StackedBarChart
        hideLegend={false}
        data={{
          labels: ["test 1", "test2"],
          data: [
            [60, 60, 90, 67, 60],
            [50, 70, 90, 100, 60],
          ],
          legend: ["css", "phy", "pac", "sta", "mat"],
          barColors: ["red", "yellow", "blue", "green", "pink"],
        }}
        width={Dimensions.get("window").width}
        height={Dimensions.get("window").height * 0.5}
        fromZero
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
      />
    </View>
  );
};

export default StackedBars;

const styles = StyleSheet.create({});
