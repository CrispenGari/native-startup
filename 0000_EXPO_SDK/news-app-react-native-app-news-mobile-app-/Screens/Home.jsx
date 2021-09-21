import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";

import { NewsCardHome } from "../Components";
import { styles } from "./Home/HomeStyles";
function Home({ topheadlineHome }) {
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
    <View style={styles.home}>
      <Text style={styles.home__heading}>Articles for you</Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {topheadlineHome.map((headline, index) => (
          <NewsCardHome key={index} headline={headline} />
        ))}
      </ScrollView>
    </View>
  );
}
export default Home;
