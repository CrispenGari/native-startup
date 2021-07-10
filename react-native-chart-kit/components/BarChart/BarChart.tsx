import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const Bar: React.FC = () => {
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
        Bar Graph
      </Text>
      <BarChart
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
          datasets: [
            {
              data: [10, 20, 5, 5, 7, 8, 5],
              withDots: true,
              color: (opacity = 1) => `rgba(34, 255, 244, ${opacity})`,
              withScrollableDot: true,
            },
          ],
        }}
        fromZero
        width={Dimensions.get("window").width}
        height={Dimensions.get("window").height * 0.5}
        yAxisLabel="$"
        yAxisSuffix=""
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
        verticalLabelRotation={30}
      />
    </View>
  );
};

export default Bar;

const styles = StyleSheet.create({});
