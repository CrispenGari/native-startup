import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Axios from "../../axios";
import { useDispatch } from "react-redux";
import actions from "../../actions";
import API_KEY from "../../keys/keys";
const Input = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const search = async () => {
    if (query) {
      setLoading(true);
      const url = `weather?q=${query}&units=metrics&appid=${API_KEY}`;
      await Axios.get(url)
        .then(({ data }) => {
          dispatch(actions.setSearched(data));
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          padding: 10,
          margin: 10,
          width: Dimensions.get("window").width * 0.8,
        }}
      >
        <TouchableOpacity onPress={search}>
          <MaterialIcons name="search" size={30} color="gray" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search location..."
          style={{
            fontSize: 16,
            flex: 1,
          }}
          onChangeText={(text) => setQuery(text)}
          onSubmitEditing={search}
          value={query}
        />
        <TouchableOpacity
          onPress={() => {
            setQuery("");
          }}
        >
          <MaterialIcons name="cancel" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      {loading ? <ActivityIndicator color="lightblue" size="large" /> : null}
    </>
  );
};

export default Input;

const styles = StyleSheet.create({});
