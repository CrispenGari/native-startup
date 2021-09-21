import React from "react";

import { View, Text, StyleSheet } from "react-native";
import Flag from "react-native-flags";
import { Fontisto } from "@expo/vector-icons";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import AnimateNumber from "react-native-countup";
function Deaths({ countries, setCountry, country_selected, piechat, data }) {
  return (
    <View style={styles.deaths}>
      <View style={styles.deaths__Label}>
        <Fontisto name="world" size={50} color="lightblue" />
        {country_selected ? (
          <View style={styles.deaths__LabelCountryInfo}>
            <Flag code={country_selected[1]} size={32} />
            <Text style={styles.deaths__LabelText}>{country_selected[0]}</Text>
          </View>
        ) : (
          <Text style={styles.deaths__LabelTextGlobal}>World Wide</Text>
        )}
      </View>
      <View style={styles.deaths__container}>
        {country_selected[1] ? (
          <Flag code={country_selected[1]} size={32} />
        ) : (
          <Fontisto name="world" size={40} color="blue" />
        )}

        <Text style={styles.deaths__containertext1}>
          People Who was killed by COVID-19 in
          {country_selected[0] ? country_selected[0] : " the World"}
        </Text>
        <Text style={styles.deaths__containertext2}>
          <AnimateNumber
            value={data ? data.deaths.value : 0}
            initial={50}
            countBy={5}
            interval={0.5}
          />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deaths: { flex: 1 },
  deaths__Label: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  deaths__LabelTextGlobal: {
    fontWeight: "800",
    fontSize: 30,
    flex: 1,
    marginHorizontal: 5,
  },
  deaths__LabelText: {
    fontWeight: "800",
    fontSize: 20,
    marginHorizontal: 5,
  },
  deaths__LabelCountryInfo: {
    flexDirection: "row",
  },
  deaths__containertext1: {
    fontWeight: "800",
    fontSize: 20,
    marginHorizontal: 5,
  },
  deaths__containertext2: {
    fontWeight: "800",
    fontSize: 20,
    marginHorizontal: 5,
    marginVertical: 80,
    color: "white",
    backgroundColor: "red",
    borderRadius: 5,
    width: "80%",
    textAlign: "center",
    padding: 20,
  },
  deaths__container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Deaths;
