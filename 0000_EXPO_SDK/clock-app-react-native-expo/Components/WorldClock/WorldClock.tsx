import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "./WorldClockStyles";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { API_KEY } from "../../data/api_key";
import axios from "../../data/axios";
function WorldClock() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timestamp, setTimeStamp] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [weatherDiscript, setWeatherDiscript] = useState("");
  const toDegres = (temp: Number) => {
    return Math.floor(temp - 273.15);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setHours(new Date(pos.timestamp).getHours());
        setMinutes(new Date(pos.timestamp).getMinutes());
        setTimeStamp(new Date(pos.timestamp).toTimeString());
        const fetchTemp = async () => {
          const data = await axios.get(
            `weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}`
          );
          setWeatherDiscript(data.data.weather.main);
          setTemperature(toDegres(data.data.main.temp));
        };
        fetchTemp();
      });
    }
  }, []);
  let Icon;

  switch (weatherDiscript?.toLowerCase()) {
    case "rain":
      Icon = <Ionicons name="ios-rainy" size={24} color="black" />;
      break;
    case "thunderstorm":
      Icon = <Ionicons name="ios-thunderstorm" size={24} color="black" />;
      break;
    case "snow":
      Icon = <FontAwesome name="snowflake-o" size={24} color="black" />;
      break;
    case "few clouds":
      Icon = <FontAwesome name="soundcloud" size={24} color="black" />;
      break;
    default:
      Icon = <Ionicons name="md-sunny" size={24} color="#F9AF00" />;
      break;
  }
  const islessThan10 = (value: Number) => {
    if (value < 10) {
      return "0" + value.toString();
    } else {
      return value;
    }
  };

  return (
    <View style={styles.worldclock}>
      <View style={styles.worldclock__left}>
        <Text style={styles.worldclock__textLocation}>
          {timestamp.slice(9)}
        </Text>
        <Text style={styles.worldclock__text}>Local time zone</Text>
      </View>
      <View style={styles.worldclock__right}>
        <Text style={styles.worldclock__textTime}>
          {islessThan10(hours) + ":" + islessThan10(minutes)}
        </Text>
        <View style={styles.worldclock__rightTemp}>
          {Icon}
          <Text style={styles.worldclock__textTemp}>{temperature}°</Text>
        </View>
      </View>
    </View>
  );
}

export default WorldClock;
