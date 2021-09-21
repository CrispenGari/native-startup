import React from "react";
import { View, Text } from "react-native";
import styles from "./NoResultStyles";
const NoResult = () => {
  return (
    <View style={styles.noResult}>
      <View style={styles.noResult__404}>
        <Text
          style={{
            color: "green",
            fontWeight: "bold",
            fontSize: 55,
          }}
        >
          4
        </Text>
        <Text
          style={{
            color: "red",
            fontWeight: "bold",
            fontSize: 55,
          }}
        >
          0
        </Text>
        <Text
          style={{
            color: "lightseagreen",
            fontWeight: "bold",
            fontSize: 55,
          }}
        >
          4
        </Text>
      </View>

      <Text style={styles.noResult__text}>Opps, No Results Found</Text>
      <Text style={styles.noResult__text}>Try a key word serach ...</Text>
    </View>
  );
};

export default NoResult;
