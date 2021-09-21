import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./FormStyles";
import { NoResult } from "../../Components";
const Form = ({ data, setQuery }) => {
  const [country, setCountry] = useState("");
  const [fullTime, setFullTime] = useState(!false);
  const [description, setDescription] = useState("");

  const search = () => {
    setQuery({
      country,
      fullTime,
      description,
    });
  };

  return (
    <>
      <View style={styles.form}>
        <Text style={styles.form__texth1}>Search For A Job</Text>
        <TextInput
          style={styles.form__input}
          onChangeText={(text) => setDescription(text)}
          value={description}
          placeholder="Job description, eg. JavaScript"
          multiline={false}
        />
        <TextInput
          style={styles.form__input}
          onChangeText={(text) => setCountry(text)}
          value={country}
          placeholder="Country/city eg. USA"
          multiline={false}
        />
        <View style={styles.form__controls}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Checkbox
              style={styles.form__checkbox}
              value={fullTime}
              onValueChange={() => setFullTime(!fullTime)}
              color={fullTime ? "#4630EB" : undefined}
            />
            <Text style={{ color: "gray", marginLeft: 5 }}>Full Time</Text>
          </View>

          <TouchableOpacity style={styles.form__button} onPress={search}>
            <Text style={styles.form__button__text}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      {data?.length === 0 && <NoResult />}
    </>
  );
};

export default Form;
