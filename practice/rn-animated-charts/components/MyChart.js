import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
  ChartYLabel,
  ChartXLabel,
} from "@rainbow-me/animated-charts";

import {
  data1,
  data2,
  data3,
  data4,
  dataColored1,
  dataColored2,
  dataColored3,
} from "../data";

const allAData = [
  data1.map(([x, y]) => ({ x, y })),
  data2.map(([x, y]) => ({ x, y })),
  data3.map(([x, y]) => ({ x, y })),
  data4.map(([x, y]) => ({ x, y })),
  dataColored1.map(([x, y]) => ({ x, y })),
  dataColored2.map(([x, y]) => ({ x, y })),
  dataColored3.map(([x, y]) => ({ x, y })),
];

const width = Dimensions.get("screen").width;
const MyChart = () => {
  const [data, setData] = React.useState(allAData[0]);
  const points = monotoneCubicInterpolation({ data, range: 40 });

  const numberFormat = (number) => {
    return `${Number(number).toFixed(2)}`;
  };
  const findYPoints = () => {
    const min = Math.min(...data?.map(({ x, y }) => y));
    const max = Math.max(...data?.map(({ x, y }) => y));
    const mid = (min + max) / 2;
    const secondTop = (max + mid) / 2;
    const secondBottom = (min + mid) / 2;

    return [
      numberFormat(max),
      numberFormat(secondTop),
      numberFormat(secondBottom),
      numberFormat(min),
    ];
  };
  const formatYLabel = (value) => {
    "worklet";
    return value ? `$${Number(value).toFixed(2)}` : "";
  };
  const formatXLabel = (value) => {
    "worklet";
    if (value >= 1e9) {
      return `${(value / 1e9).toFixed(2)}B`;
    }
    if (value >= 1e6) {
      return `${(value / 1e6).toFixed(2)}M`;
    }
    if (value >= 1e3) {
      return `${(value / 1e9).toFixed(2)}K`;
    } else {
      return `${Number(value)?.toFixed(2)}`;
    }
  };
  return (
    <>
      <View
        style={{
          height: width * 0.8,
          width: width,
          backgroundColor: "#3e3e3e",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            padding: 20,
            bottom: 0,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {findYPoints().map((label, index) => (
            <Text
              key={index}
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {label}
            </Text>
          ))}
        </View>
        <ChartPathProvider
          data={{
            points,
            smoothingStrategy: "bezier",
          }}
        >
          <ChartPath
            height={150}
            stroke="green"
            width={width}
            strokeWidth={2}
            style={{ backgroundColor: "#3e3e3e" }}
          />
          {/* Chat dot */}
          <ChartDot>
            <View
              style={{
                position: "absolute",
                alignItems: "center",
                left: -35,
                width: 80,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 7,
                    backgroundColor: "lightseagreen",
                  }}
                />
              </View>
              {/* ChatYLabel */}
              <ChartYLabel
                format={formatYLabel}
                style={{
                  width: 80,
                  color: "white",
                  textAlign: "center",
                }}
              />
              {/* ChartXLabel */}
              <ChartXLabel
                format={formatXLabel}
                style={{
                  width: 80,
                  color: "gray",
                  lineHeight: 5,
                  fontSize: 10,
                  textAlign: "center",
                }}
              />
            </View>
          </ChartDot>
        </ChartPathProvider>
      </View>
      {/* We will render a flat list that will change the data in realtime */}
      <FlatList
        data={allAData}
        keyExtractor={(item, index) => index}
        style={{
          width: "100%",
          padding: 10,
        }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => setData(item)}
              style={{
                padding: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "white",
                }}
              >
                Data Point {index + 1}
              </Text>
            </TouchableOpacity>
          );
        }}
        ListHeaderComponent={
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            All DataPoints
          </Text>
        }
      />
    </>
  );
};

export default MyChart;

const styles = StyleSheet.create({});
