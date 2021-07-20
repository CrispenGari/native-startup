import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Background } from "../../components";
import Plot from "../../components/Plot/Plot";
const Stats: React.FC<any> = ({ route }) => {
  console.log(route);
  const current = useSelector((state: any) => state.current);
  const tempLabels = ["feels_like", "temp", "temp_max", "temp_min"];
  const tempData = Object.entries(current?.main)
    .filter(([key, value]) => tempLabels.indexOf(key) !== -1)
    .map(([key, value]) => value);

  console.log(current?.wind);
  return (
    <Background>
      {current ? (
        route?.params?.parent === "Temperature" ? (
          <Plot
            data={tempData}
            labels={tempLabels}
            title={"Daily Temperature summary"}
          />
        ) : route?.params?.parent === "Wind" ? (
          <Plot
            data={Object.values(current?.wind)}
            labels={Object.keys(current?.wind)}
            title={"Daily Wind summary"}
          />
        ) : (
          <View>
            <Text
              style={{
                marginBottom: 20,
                fontSize: 20,
                color: "white",
                width: "100%",
                textAlign: "center",
              }}
            >
              No statistics on the search tab
            </Text>
          </View>
        )
      ) : (
        <ActivityIndicator color="lightseagreen" size="large" />
      )}
    </Background>
  );
};

export default Stats;

const styles = StyleSheet.create({});
