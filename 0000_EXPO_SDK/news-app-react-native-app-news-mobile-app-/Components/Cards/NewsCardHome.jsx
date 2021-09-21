import React from "react";
import ReadMore from "react-native-read-more-text";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TextTruncate from "react-native-text-truncate";
const height = Dimensions.get("window").height;
function NewsCardHome({ headline }) {
  return (
    <View style={styles.newscard}>
      <View style={styles.newscard__header}>
        <Text style={styles.newscard__headercategory}>
          Category • {headline.category}
        </Text>
        <Text style={styles.newscard__headercategory}>
          Source Id • {headline.id}
        </Text>
      </View>
      <Image
        style={styles.newscard__image}
        source={{
          uri:
            "https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png",
        }}
      />

      <TextTruncate numberOfLines={20}>
        <Text style={styles.newscard__footerTitle}>• {headline.name}</Text>
      </TextTruncate>
      <TextTruncate numberOfLines={3}>
        <Text style={styles.newscard__footerNews}>{headline.description}</Text>
      </TextTruncate>
      <View style={styles.newscard__footer}>
        <Text style={styles.newscard__footerTimestamp}>
          {headline.name} • {headline.url}
        </Text>
        <TouchableOpacity>
          <Ionicons name="md-more" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newscard: {
    borderRadius: 10,
    height: height / 2,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#3A454E",
  },
  newscard__footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  newscard__footerTimestamp: {
    color: "#ccc",
  },
  newscard__headercategory: {
    color: "#ccc",
  },
  newscard__header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  newscard__footerTitle: {
    fontWeight: "600",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
    padding: 20,
    color: "#fff",
  },
  newscard__image: {
    flex: 1,
  },
  newscard__footerNews: {
    fontWeight: "500",
    fontSize: 15,
    color: "#fff",
  },
});

export default NewsCardHome;
