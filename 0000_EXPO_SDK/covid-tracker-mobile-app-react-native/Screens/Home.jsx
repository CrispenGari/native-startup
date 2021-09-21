import React, { useState } from "react";
import Flag from "react-native-flags";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Picker,
  Dimensions,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { TouchableHighlight } from "react-native-gesture-handler";
function Home({
  countries,
  setCountry,
  country_selected,
  piechat,
  data,
  dataforlabels,
}) {
  const [selectedValue, setSelectedValue] = useState("");
  const width = Dimensions.get("window").width;
  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };
  return (
    <View style={styles.home}>
      <View style={styles.home__Label}>
        <Fontisto name="world" size={50} color="lightblue" />
        {country_selected ? (
          <View style={styles.home__LabelCountryInfo}>
            <Flag code={country_selected[1]} size={32} />
            <Text style={styles.home__LabelText}>{country_selected[0]}</Text>
          </View>
        ) : (
          <Text style={styles.home__LabelTextGlobal}>World Wide</Text>
        )}
      </View>
      <ScrollView>
        <View style={styles.home__countryPicker}>
          <Text style={styles.home__countryPickerText}>SELECT A COUNTRY</Text>
          <Picker
            selectedValue={selectedValue}
            style={styles.home__countryPickerSelect}
            onValueChange={(itemValue, itemIndex) => {
              setCountry(itemValue);
              setSelectedValue(itemValue[0]);
            }}
          >
            <Picker.Item label={"Global"} value={""} key={""} />
            {countries.map((country) => (
              <Picker.Item
                label={country.name}
                value={[country.name, country.iso2]}
                key={country.name}
              />
            ))}
          </Picker>
        </View>
        <View style={styles.home__chart}>
          <PieChart
            data={piechat}
            width={width}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>
        <View style={styles.home__footer}>
          <Text style={styles.home__footerHeading}>Summary</Text>

          <View style={styles.home__footerItemContainer}>
            <Text style={styles.home__footerItem}>Confirmed: </Text>
            <Text style={styles.home__footerItemC}>
              {dataforlabels ? dataforlabels?.confirmed : 0}
            </Text>
          </View>
          <View style={styles.home__footerItemContainer}>
            <Text style={styles.home__footerItem}>Deaths: </Text>
            <Text style={styles.home__footerItemD}>
              {dataforlabels ? dataforlabels?.deaths : 0}
            </Text>
          </View>
          <View style={styles.home__footerItemContainer}>
            <Text style={styles.home__footerItem}>Recoveries: </Text>
            <Text style={styles.home__footerItemR}>
              {dataforlabels ? dataforlabels?.recovered : 0}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  home: { flex: 1 },
  home__Label: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  home__LabelTextGlobal: {
    fontWeight: "800",
    fontSize: 30,
    flex: 1,
    marginHorizontal: 5,
  },
  home__LabelText: {
    fontWeight: "800",
    fontSize: 20,
    marginHorizontal: 5,
  },
  home__countryPicker: {
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  home__countryPickerText: {
    textAlign: "center",
  },
  home__countryPickerText: {
    padding: 10,
    textAlign: "center",
  },
  home__LabelCountryInfo: {
    flexDirection: "row",
  },
  home__chart: {
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  home__footer: {
    padding: 10,
  },
  home__footerHeading: {
    fontWeight: "800",
    fontSize: 30,
    textAlign: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  home__footerItem: {
    fontWeight: "800",
    fontSize: 18,
  },
  home__footerItemContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 5,
  },
  home__footerItemR: {
    color: "white",
    backgroundColor: "green",
    borderRadius: 5,
    width: 100,
    textAlign: "center",
  },
  home__footerItemD: {
    color: "white",
    backgroundColor: "red",
    borderRadius: 5,
    width: 100,
    textAlign: "center",
  },
  home__footerItemC: {
    color: "white",
    backgroundColor: "orange",
    borderRadius: 5,
    width: 100,
    textAlign: "center",
  },
});
export default Home;
