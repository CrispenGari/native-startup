import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Background } from "../../components";
import Plot from "../../components/Plot/Plot";
const Stats: React.FC<any> = ({ route }) => {
  const current = useSelector((state: any) => state.current);
  const labels = ["feels_like", "temp", "temp_max", "temp_min"];
  const data = Object.entries(current?.main)
    .filter(([key, value]) => labels.indexOf(key) !== -1)
    .map(([key, value]) => value);
  return (
    <Background>
      {current ? (
        <Plot data={data} labels={labels} />
      ) : (
        <ActivityIndicator color="lightseagreen" size="large" />
      )}
    </Background>
  );
};

export default Stats;

const styles = StyleSheet.create({});
