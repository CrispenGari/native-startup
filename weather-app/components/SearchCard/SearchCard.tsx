import React from "react";
import { KeyboardAvoidingView, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Input from "../Input/Input";
import SearchResults from "../SearchResults/SearchResults";

const SearchCard = () => {
  const searched = useSelector((state: any) => state.searched);
  if (searched) {
    return (
      <ScrollView>
        <KeyboardAvoidingView>
          <Input />
        </KeyboardAvoidingView>
        <SearchResults />
      </ScrollView>
    );
  }
  return (
    <View>
      <KeyboardAvoidingView>
        <Input />
      </KeyboardAvoidingView>
      <SearchResults />
    </View>
  );
};

export default SearchCard;
