import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { EvilIcons, AntDesign, Entypo } from "@expo/vector-icons";
function Main({ date, cityName, weather, sys, wind, data, clouds }) {
  return (
    <View style={styles.main}>
      <Entypo name="location-pin" size={40} color="white" />
      <Text style={styles.main__cityName}>{cityName} </Text>
      <Text style={styles.main__date}>{date}</Text>
      <View style={styles.main__temperatureContainer}>
        <View style={styles.main__temperatureIconAndTemperature}>
          <AntDesign name="cloud" size={50} color="white" />
          <Text style={styles.main__temperatureText}>
            {" "}
            {Math.round((data.temp - 273.15) * 10) / 10}° C{" "}
          </Text>
        </View>
        <View style={styles.main__temperatureCity}>
          <Text style={styles.main__temperatureContainerText2}>
            Humidity {data.humidity}% | {data.humidity / 100}
          </Text>
          <Text style={styles.main__temperatureContainerText2}>|</Text>
          <Text style={styles.main__temperatureContainerText2}>
            {cityName} ({sys.country})
          </Text>
        </View>
        <Text style={styles.main__descriptionContainer}>
          <Text style={styles.main__description}>{weather[0]?.main}</Text>
        </Text>
        <Text style={styles.main__descriptionsub}>
          "{weather[0]?.description}"
        </Text>
      </View>
      <View style={styles.main__hr} />
      <View style={styles.main__descriptionContainer}>
        <Text style={styles.main__descriptionContainer}>
          <Text style={styles.main__description}>Wind </Text>
        </Text>
        <Text style={styles.main__descriptionsub}>
          "Speed: {wind.speed} m/s"
        </Text>
        <Text style={styles.main__descriptionsub}>
          "Direction: {wind.deg}° from North"
        </Text>
        <Text style={styles.main__descriptionContainer}>
          <Text style={styles.main__description}>More </Text>
        </Text>
        <Text style={styles.main__descriptionsub}>
          "Cloud Cover: {clouds.all}% "
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    textAlign: "center",
    alignItems: "center",
  },
  main__hr: {
    borderColor: "white",
    borderWidth: 0.5,
    marginVertical: 10,
    width: "100%",
  },
  main__cityName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Roboto",
  },
  main__date: {
    color: "#fff",
    fontFamily: "sans-serif-thin",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 1,
  },
  main__temperatureIconAndTemperature: {
    flexDirection: "row",
    marginTop: 15,
  },
  main__temperatureText: {
    fontSize: 80,
    fontWeight: "200",
    fontFamily: "sans-serif-thin",
    color: "#fff",
    letterSpacing: -5,
    marginLeft: 0,
  },
  main__temperatureContainerText2: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "200",
    fontFamily: "sans-serif-thin",
  },
  main__temperatureCity: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  main__descriptionContainer: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
  },
  main__descriptionsub: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "monospace",
    marginVertical: 10,
  },
});

export default Main;

/*
Android
    <Text style={{fontFamily: 'normal'}}>  normal </Text>
        <Text style={{fontFamily: 'notoserif'}}>  notoserif </Text>
        <Text style={{fontFamily: 'sans-serif'}}>  sans-serif </Text>
        <Text style={{fontFamily: 'sans-serif-light'}}>  sans-serif-light </Text>
        <Text style={{fontFamily: 'sans-serif-thin'}}>  sans-serif-thin </Text>
        <Text style={{fontFamily: 'sans-serif-condensed'}}>  sans-serif-condensed </Text>
        <Text style={{fontFamily: 'sans-serif-medium'}}>  sans-serif-medium </Text>
        <Text style={{fontFamily: 'serif'}}>  serif </Text>
        <Text style={{fontFamily: 'Roboto'}}>  Roboto </Text>
        <Text style={{fontFamily: 'monospace'}}>  monospace </Text>     
iOS
https://github.com/react-native-training/react-native-fonts/blob/master/IosFonts.js
*/
