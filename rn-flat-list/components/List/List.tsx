import React from "react";
import { StyleSheet, Text, View } from "react-native";

type StateProps = {
  id: number;
  suffix: string;
  industry: string;
  uid: string;
};
const List: React.FC<any> = ({
  item: {
    item: { industry, suffix },
  },
}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderColor: "lightgray",
        padding: 10,
        borderWidth: 1,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        {industry}
      </Text>
      <Text
        style={{
          color: "gray",
        }}
      >
        {suffix}
      </Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
