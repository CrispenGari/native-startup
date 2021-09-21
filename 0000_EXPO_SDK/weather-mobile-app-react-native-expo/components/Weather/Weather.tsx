import React, { useState, useEffect } from "react";
import { Text, ScrollView, View } from "react-native";
import { Temp } from "../../components";
import { Entypo } from "@expo/vector-icons";
import styles from "./WeatherStyles";
import axios from "axios";
import fetchData from "../../data";
import constants from "../../utils";
const hot = require("../../assets/hot.jpg");
const cold = require("../../assets/cold.jpg");

const Weather = ({ setBackground }) => {
  const [location, setLocation] = useState({});
  const [data, setData] = useState({});
  const { country, country_code, city, region } = location;
  useEffect(() => {
    (async () => {
      const res = await axios.get(constants.LOCATION_URL);
      setLocation(res.data);
    })();
  }, []);
  useEffect(() => {
    if (Object.keys(location).length > 0) {
      const { latitude, longitude } = location;

      (async () => {
        const res = await fetchData.get(
          `onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${constants.API_KEY}`
        );
        setData(res?.data);
        if (data?.current?.temp > 16) {
          setBackground(hot);
        } else {
          setBackground(cold);
        }
      })();
    }
  }, [location]);

  // SET RESULTS

  const { hourly, daily } = data;

  return (
    <>
      <View style={styles.weather__location}>
        <Text
          style={styles.weather__text}
        >{`${country}, ${country_code}`}</Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Entypo name="location" size={30} color="orangered" />
          <Text
            style={styles.weather__text__location}
          >{`${region}, ${city}`}</Text>
        </View>
      </View>
      <ScrollView style={styles.weather} horizontal={true} vertical={false}>
        {daily?.map((data, key) => (
          <Temp key={key} dayIndex={key} data={data} hourly={hourly} />
        ))}
      </ScrollView>
    </>
  );
};

export default Weather;
