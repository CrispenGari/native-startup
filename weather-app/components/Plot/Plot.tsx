import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
const Plot: React.FC<any> = ({ labels, data }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginBottom: 20,
          fontSize: 30,
          color: "white",
          width: "100%",
          textAlign: "center",
        }}
      >
        Daily Temperature
      </Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              withDots: true,
              color: (opacity = 1) => `rgba(34, 255, 244, ${opacity})`,
              withScrollableDot: true,
            },
          ],
        }}
        width={Dimensions.get("window").width * 0.95}
        height={Dimensions.get("window").height * 0.6}
        bezier // a smooth curve
        verticalLabelRotation={90}
        onDataPointClick={(props: any) => {}}
        withShadow
        yLabelsOffset={5}
        xLabelsOffset={-10}
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
            r: "5", // size of the marker
            strokeWidth: "2",
            stroke: "red",
          },
        }}
      />
    </View>
  );
};

export default Plot;

const styles = StyleSheet.create({});
