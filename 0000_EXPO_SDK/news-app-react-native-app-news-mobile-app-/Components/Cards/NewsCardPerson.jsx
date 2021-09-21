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
function NewsCardPerson({ topheadline, source }) {
  return (
    <View style={styles.newscard}>
      {topheadline.urlToImage ? (
        <Image
          style={styles.newscard__image}
          source={{
            uri: topheadline.urlToImage,
          }}
        />
      ) : (
        <Text></Text>
      )}

      <TextTruncate numberOfLines={topheadline.urlToImage ? 2 : 20}>
        <Text style={styles.newscard__footerTitle}>
          {topheadline.description}
        </Text>
      </TextTruncate>
      <TextTruncate numberOfLines={topheadline.urlToImage ? 2 : 20}>
        <Text style={styles.newscard__footerNews}>{topheadline.content}</Text>
      </TextTruncate>
      <View style={styles.newscard__footer}>
        <Text style={styles.newscard__footerTimestamp}>
          {topheadline.source.id} • {topheadline.publishedAt}
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

  newscard__footerTitle: {
    fontWeight: "600",
    fontSize: 20,
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

export default NewsCardPerson;
