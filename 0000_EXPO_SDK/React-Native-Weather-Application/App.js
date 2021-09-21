import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { Provider } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import { global } from "./Components/Header/Header";
import { data } from "./axios-data";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Main, Header } from "./Components";
export default function App() {
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState({});
  const [wind, setWind] = useState({});
  const [clouds, setClouds] = useState({});
  const [weather, setWeather] = useState({});
  const [sys, setSys] = useState({});
  const apiKey = "dfa4a29b137df2f74b874084df368e93";
  var units = "imperial" || "degrees";
  var url = `http://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}`;
  const sendData = () => {
    async function fetchData() {
      const request = await axios.get(url);
      setCityName(request.data.name);
      setWind(request.data.wind);
      setData(request.data.main);
      setSys(request.data.sys);
      setClouds(request.data.clouds);
      setWeather(request.data.weather);
      return request;
    }
    fetchData();
  };
  /*
  Or 
 const sendData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((request) => {
        console.log(request);
        //  const request = await axios.get(url);
        setCityName(request.data.name);
        setWind(request.data.wind);
        setData(request.data.main);
        setSys(request.data.sys);
        setClouds(request.data.clouds);
        setWeather(request.data.weather);
      })
      .catch((err) => console.log("something went wrong"));

  };
  */
  useEffect(() => {
    if (window.navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation(pos.coords);
      });
    }
  }, [url, sendData]);

  useEffect(() => {
    const localDate = () => {
      setDate(new Date().toUTCString());
    };
    return () => {
      localDate();
    };
  }, [url, date, data]);

  return (
    <View style={styles.container}>
      <View style={styles.container__wrapper}>
        <Header sendData={sendData} />
        <Main
          date={date}
          sys={sys}
          wind={wind}
          cityName={cityName}
          weather={weather}
          data={data}
          clouds={clouds}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  container__wrapper: {
    width: "100%",
    backgroundColor: "#688EC4",
    marginTop: 25,
    height: "100%",
  },
});
