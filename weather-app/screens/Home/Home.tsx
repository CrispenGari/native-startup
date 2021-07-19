import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Background } from "../../components";
import SearchCard from "../../components/SearchCard/SearchCard";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import WindCard from "../../components/WindCard/WindCard";
const Home: React.FC<any> = ({ route }) => {
  return (
    <Background>
      {route?.params?.parent === "Temperature" ? (
        <WeatherCard />
      ) : route?.params?.parent === "Wind" ? (
        <WindCard />
      ) : route?.params?.parent === "Search" ? (
        <SearchCard />
      ) : (
        <ActivityIndicator color="lightblue" size="large" />
      )}
    </Background>
  );
};

export default Home;
