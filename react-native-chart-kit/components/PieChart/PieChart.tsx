import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const Pie: React.FC = () => {
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
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
        Pie Chart
      </Text>
      <PieChart
        data={data}
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
        accessor={"population"}
        backgroundColor={"#08130D"}
        paddingLeft={"5"}
        center={[0, 0]}
        absolute
        avoidFalseZero
      />
    </View>
  );
};

export default Pie;

const styles = StyleSheet.create({});
