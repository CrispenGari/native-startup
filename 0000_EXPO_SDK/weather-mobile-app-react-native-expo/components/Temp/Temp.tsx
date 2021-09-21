import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import styles from "./TempStyles";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Temp = ({ data, hourly }) => {
  const hourlyTemp = [
    [hourly[0], hourly[1], hourly[2]],
    [hourly[3], hourly[4], hourly[5]],
    [hourly[6], hourly[7], hourly[8]],
    [hourly[9], hourly[10], hourly[11]],
    [hourly[12], hourly[13], hourly[14]],
    [hourly[15], hourly[16], hourly[17]],
    [hourly[18], hourly[19], hourly[20]],
    [hourly[21], hourly[22], hourly[23]],
    [hourly[24], hourly[25], hourly[26]],
    [hourly[27], hourly[28], hourly[29]],
    [hourly[30], hourly[31], hourly[32]],
    [hourly[33], hourly[34], hourly[35]],
    [hourly[36], hourly[37], hourly[38]],
    [hourly[39], hourly[40], hourly[41]],
    [hourly[42], hourly[43], hourly[44]],
    [hourly[45], hourly[46], hourly[47]],
  ];
  return (
    <View style={styles.temp}>
      <View style={styles.temp__description}>
        <Text style={styles.temp__text2}>{data?.weather[0]?.main}</Text>
        <Image
          style={styles.temp__icon}
          source={{
            uri: `http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`,
          }}
        />
      </View>
      <Text style={styles.temp__text1}>{Math.floor(data?.temp?.day)}°c</Text>
      <Text style={styles.temp__text3}>{data?.weather[0]?.description}</Text>

      <ScrollView style={styles.temp__hourly__container}>
        {hourlyTemp?.map((temp, index) => {
          return (
            <View style={styles.temp__hourly__container__wrapper} key={index}>
              {temp?.map((weather, index) => {
                const date = new Date(weather?.dt * 1000);
                let hrs = date?.getHours();
                let mns = date?.getMinutes();
                const date_time = `${
                  String(hrs).length === 2 ? hrs : "0" + hrs
                }:${String(mns).length === 2 ? mns : "0" + mns}`;
                let previous_date_time = `${
                  String(hrs + 1).length === 2 ? hrs + 1 : `0${hrs + 1}`
                }:${String(mns).length === 2 ? mns : "0" + mns}`;
                return (
                  <View style={styles.temp__hourly} key={index}>
                    <Text style={styles.temp__text4}>
                      {date_time} - {previous_date_time}
                    </Text>
                    <Image
                      style={styles.temp__icon__hourly}
                      source={{
                        uri: `http://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`,
                      }}
                    />
                    <Text style={styles.temp__text5}>
                      {Math.floor(weather?.temp)}°c
                    </Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
      <Text style={styles.temp__text6}>
        {days[new Date(data?.dt * 1000).getDay()]}
      </Text>
    </View>
  );
};

export default Temp;
