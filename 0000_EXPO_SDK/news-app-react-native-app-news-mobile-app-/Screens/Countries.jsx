import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import { NewsCardCountries } from "../Components";
import { styles } from "./Countries/CountriesStyles";

function Countries({ topheadlineCountry }) {
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };
  const [openMenu, setOpenMenu] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <View style={styles.countries}>
      <Text style={styles.country__heading}>News in America</Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {topheadlineCountry.map((headline, i) => (
          <NewsCardCountries key={i} headline={headline} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Countries;
