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
function Recover({ countries, setCountry, country_selected, piechat, data }) {
  return (
    <View style={styles.recover}>
      <View style={styles.recover__Label}>
        <Fontisto name="world" size={50} color="lightblue" />
        {country_selected ? (
          <View style={styles.recover__LabelCountryInfo}>
            <Flag code={country_selected[1]} size={32} />
            <Text style={styles.recover__LabelText}>{country_selected[0]}</Text>
          </View>
        ) : (
          <Text style={styles.recover__LabelTextGlobal}>World Wide</Text>
        )}
      </View>
      <View style={styles.recover__container}>
        {country_selected[1] ? (
          <Flag code={country_selected[1]} size={32} />
        ) : (
          <Fontisto name="world" size={40} color="blue" />
        )}
        <Text style={styles.recover__containertext1}>
          Recovered People in
          {country_selected[0] ? country_selected[0] : " the World"}
        </Text>
        <Text style={styles.recover__containertext2}>
          <AnimateNumber
            value={data ? data.recovered.value : 0}
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
  recover: { flex: 1 },
  recover__Label: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  recover__LabelTextGlobal: {
    fontWeight: "800",
    fontSize: 30,
    flex: 1,
    marginHorizontal: 5,
  },
  recover__LabelText: {
    fontWeight: "800",
    fontSize: 20,
    marginHorizontal: 5,
  },
  recover__LabelCountryInfo: {
    flexDirection: "row",
  },
  recover__containertext1: {
    fontWeight: "800",
    fontSize: 20,
    marginHorizontal: 5,
  },
  recover__containertext2: {
    fontWeight: "800",
    fontSize: 20,
    marginHorizontal: 5,
    marginVertical: 80,
    color: "white",
    backgroundColor: "green",
    borderRadius: 5,
    width: "80%",
    textAlign: "center",
    padding: 20,
  },
  recover__container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Recover;
