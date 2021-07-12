import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Background } from "../../components";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
const Home: React.FC = () => {
  return (
    <Background>
      <WeatherCard />
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({});
