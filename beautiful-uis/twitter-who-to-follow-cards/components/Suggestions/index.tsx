import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import axios from "axios";
import Card from "../Card";
import { COLORS } from "../../assets/colors";

interface Props {
  theme: string;
}
const Suggestions: React.FC<Props> = ({ theme }) => {
  const [suggestions, setSuggestions] = React.useState([]);
  const color = theme === COLORS.DARK_BACKGROUND ? "white" : "black";

  React.useEffect(() => {
    const _url = "https://randomuser.me/api/?results=1000";
    axios.get(_url).then(({ data }) =>
      setSuggestions(
        data?.results?.map((result: any) => ({
          picture: result?.picture?.large,
          name: result?.name?.first,
          id: result?.login?.uuid,
        }))
      )
    );
  }, []);

  return (
    <View style={{}}>
      <Text
        style={{
          padding: 10,
          color: color,
          borderBottomWidth: 0.5,
          borderBottomColor: "lightgray",
          borderTopWidth: 0.5,
          borderTopColor: "lightgray",
          fontSize: 20,
        }}
      >
        Who to follow
      </Text>

      <FlatList
        style={{
          marginTop: 10,
          paddingHorizontal: 10,
        }}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={suggestions}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <Card item={item} color={color} />}
      />
    </View>
  );
};

export default Suggestions;

const styles = StyleSheet.create({});
