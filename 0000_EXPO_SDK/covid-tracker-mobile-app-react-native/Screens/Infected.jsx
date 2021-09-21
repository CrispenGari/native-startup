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

function Infected({ countries, setCountry, country_selected, piechat, data }) {
  return (
    <View style={styles.infected}>
      <View style={styles.infected__Label}>
        <Fontisto name="world" size={50} color="lightblue" />
        {country_selected ? (
          <View style={styles.infected__LabelCountryInfo}>
            <Flag code={country_selected[1]} size={32} />
            <Text style={styles.infected__LabelText}>
              {country_selected[0]}
            </Text>
          </View>
        ) : (
          <Text style={styles.infected__LabelTextGlobal}>World Wide</Text>
        )}
      </View>
      <View style={styles.infected__container}>
        {country_selected[1] ? (
          <Flag code={country_selected[1]} size={32} />
        ) : (
          <Fontisto name="world" size={40} color="blue" />
        )}
        <Text style={styles.infected__containertext1}>
          Infected People in{" "}
          {country_selected[0] ? country_selected[0] : " the World"}
        </Text>
        <Text style={styles.infected__containertext2}>
          <AnimateNumber
            value={data ? data.confirmed.value : 0}
            initial={50}
            countBy={1}
            interval={0.5}
          />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infected: { flex: 1 },

  infected__Label: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  infected__LabelTextGlobal: {
    fontWeight: "800",
    fontSize: 30,
    flex: 1,
    marginHorizontal: 5,
  },
  infected__LabelText: {
    fontWeight: "800",
    fontSize: 20,
    marginHorizontal: 5,
  },
  infected__LabelCountryInfo: {
    flexDirection: "row",
  },
  infected__container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infected__containertext1: {
    fontWeight: "800",
    fontSize: 20,
    marginHorizontal: 5,
  },
  infected__containertext2: {
    fontWeight: "800",
    fontSize: 20,
    marginHorizontal: 5,
    marginVertical: 80,
    color: "white",
    backgroundColor: "orange",
    borderRadius: 5,
    width: "80%",
    textAlign: "center",
    padding: 20,
  },
});
export default Infected;
