import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import { NewsCardPerson } from "../Components";
import { styles } from "./People/PeopleStyles";
function People({ topheadlinePerson }) {
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
    <View style={styles.people}>
      <Text style={styles.people__heading}>News about Person</Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {topheadlinePerson.map((topheadline, index) => (
          <NewsCardPerson key={index} topheadline={topheadline} />
        ))}
      </ScrollView>
    </View>
  );
}

export default People;
