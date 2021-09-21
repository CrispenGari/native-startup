import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import { NewsCardSport } from "../Components";
import { styles } from "./Sport/SportStyles";
function Sport({ topheadlineSport }) {
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
    <View style={styles.sport}>
      <Text style={styles.sport__heading}>Sports News</Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {topheadlineSport.map((headline, i) => (
          <NewsCardSport key={i} headline={headline} />
        ))}
      </ScrollView>
    </View>
  );
}

export default Sport;
