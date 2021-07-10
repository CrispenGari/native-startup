import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
const Line: React.FC = () => {
  const [point, setPoint] = useState();
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

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
        LINE CHART
      </Text>
      <LineChart
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
          datasets: [
            {
              data: [10, 20, 5, 5, 7, 8, 5],
              withDots: true,
              color: (opacity = 1) => `rgba(34, 255, 244, ${opacity})`,
              withScrollableDot: true,
            },
            {
              data: [9, 18, 8, 19, 10, 25, 19],
              withDots: true,
              color: (opacity = 1) => `rgba(255, 255, 244, ${opacity})`,
              withScrollableDot: true,
            },
            {
              data: [30],
              withDots: false, // setting the max value for y
            },
          ],
          legend: ["Rain", "Humidity"],
        }}
        width={Dimensions.get("window").width}
        height={Dimensions.get("window").height * 0.5}
        yAxisLabel="temp"
        // xAxisLabel="days"
        bezier // a smooth curve
        verticalLabelRotation={90}
        onDataPointClick={(props: any) => {
          setPoint(props);
        }}
        // yAxisSuffix="temp"

        fromZero // start from 0
        // transparent
        withShadow
        yLabelsOffset={5}
        // hidePointsAtIndex={[3, 4]}
        chartConfig={{
          backgroundGradientFrom: "#1E2923",
          backgroundGradientFromOpacity: 1,
          backgroundGradientTo: "#08130D",
          backgroundGradientToOpacity: 0.5,
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          strokeWidth: 4, // optional, default 3
          barPercentage: 1,
          useShadowColorFromDataset: true, // optional
          propsForDots: {
            r: "2", // size of the marker
            strokeWidth: "2",
            stroke: "yellow",
          },
        }}
      />

      <Text>{JSON.stringify(point, null, 2)}</Text>
    </View>
  );
};

export default Line;

const styles = StyleSheet.create({});
