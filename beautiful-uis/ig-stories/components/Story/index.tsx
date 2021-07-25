import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

interface Item {
  id: string;
  name: string;
  picture: string;
}
interface Props {
  index: number;
  item: Item;
  separators: any;
}
const Story: React.FC<Props> = ({ item }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
      }}
    >
      <Image
        source={{
          uri: item.picture,
        }}
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          marginBottom: 5,
          borderWidth: 3,
          borderColor: "#DB594D",
        }}
      />
      <Text
        style={{
          fontFamily: "OpenSansLight",
          color: "gray",
          fontSize: 10,
        }}
      >
        {item?.name === "crispen" ? "Your Story" : item?.name}
      </Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({});
