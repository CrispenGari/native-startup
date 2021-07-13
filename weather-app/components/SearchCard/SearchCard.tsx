import React from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import Input from "../Input/Input";
const SearchCard = () => {
  return (
    <View>
      <KeyboardAvoidingView>
        <Input />
      </KeyboardAvoidingView>
    </View>
  );
};

export default SearchCard;

const styles = StyleSheet.create({});
