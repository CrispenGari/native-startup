import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
const SearchCard = () => {
  return (
    <View>
      <SearchBar
        platform="android"
        placeholder="Type Here..."
        onChangeText={() => {}}
        value={""}
        style={{
          width: 222,
        }}
        containerStyle={{
          width: 200,
          padding: 0,
        }}
      />
    </View>
  );
};

export default SearchCard;

const styles = StyleSheet.create({});
