import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import { NewsCardBusiness } from "../Components";
import { styles } from "./Business/BusinessStyles";
function Business({ topheadlineBusiness }) {
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
    <View style={styles.business}>
      <Text style={styles.business__heading}> Business News</Text>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {topheadlineBusiness.map((headline, index) => (
          <NewsCardBusiness key={index} headline={headline} />
        ))}
      </ScrollView>
    </View>
  );
}

/*
 {
  "author": "Marc Sauter",
  "content": "Cerebras hat die Wafer Scale Engine 2 angekündigt, einen für künstliche Intelligenz gedachten Prozessor. Wie schon bei der ersten Generation handelt es sich um einen gigantischen quadratischen Chip, … [+2206 chars]",
  "description": "Hot Chips 32

 Mit der Wafer Scale Engine 2 baut Cerebras erneut einen KI-Chip mit riesigen Ausmaßen.",
  "publishedAt": "2020-08-22T11:25:02Z",
  "source": Object {
    "id": null,
    "name": "Golem.de",
  },
  "title": "Cerebras: Wafer-großer Prozessor hat 850.000 Kerne - Golem.de - Golem.de",
  "url": "https://www.golem.de/news/cerebras-wafer-grosser-prozessor-hat-850-000-kerne-2008-150420.html",
  "urlToImage": "https://www.golem.de/2008/150420-240552-240550_rc.jpg",
}
*/

export default Business;
