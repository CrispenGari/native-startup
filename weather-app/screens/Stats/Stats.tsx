import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Background } from "../../components";

const Stats: React.FC = () => {
  const locationName = useSelector((state: any) => state.locationName);
  return (
    <Background>
      <Text>{JSON.stringify(locationName)}</Text>
    </Background>
  );
};

export default Stats;

const styles = StyleSheet.create({});
