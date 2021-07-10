import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { ContributionGraph } from "react-native-chart-kit";
const commitsData = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 },
];
const HeatMap = () => {
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
        Contribution Graph
      </Text>
      <ContributionGraph
        values={commitsData}
        endDate={new Date("2017-04-01")}
        numDays={105}
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
        width={Dimensions.get("window").width}
        height={224}
      />
    </View>
  );
};

export default HeatMap;

const styles = StyleSheet.create({});
