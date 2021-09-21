import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Text, View, ScrollView, RefreshControl, Switch } from "react-native";

import * as Location from "expo-location";
import { Card, Form } from "../../Components";
import styles from "./ScreenStyles";
const Screen = ({ componentName }) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(!false);
  const [fullTime, setFullTime] = useState(false);
  const [country, setCountry] = useState("");
  const [query, setQuery] = useState({});
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    if (data.length > 0) {
      setRefreshing(false);
    }
  }, [data]);
  useEffect(() => {
    (async () => {
      setData([]);
      let endpoint = "";
      if (componentName.toLocaleLowerCase() === "for you") {
        endpoint = `description=all&full_time=${fullTime}`;
      } else if (componentName.toLocaleLowerCase() === "home") {
        const { country, description, fullTime } = query;
        endpoint = `description=${description}&full_time=${fullTime}&location=${country}`;
        console.log(endpoint);
      } else if (componentName.toLocaleLowerCase() === "local") {
        (async () => {
          const permision = await Location.getPermissionsAsync();
          if (!permision.granted) {
            await Location.requestPermissionsAsync();
          } else {
            if (permision.granted) {
              (async () => {
                const { data } = await axios.get(
                  "https://ipfind.co/?ip=196.21.104.1&auth=7b98da30-ff64-4429-ae6a-10d87d82ed4e"
                );
                const { country, country_code } = data;
                setCountry(country + ", " + country_code);
                endpoint = `description=all&location=${country_code}`;
              })();
            }
          }
        })();
      } else {
        endpoint = `description=${componentName.toLocaleLowerCase()}&full_time=${fullTime}`;
      }
      const cors = "https://cors-anywhere.herokuapp.com/";
      const baseUrl = "https://jobs.github.com/positions.json?";
      if (endpoint !== "") {
        const data = await axios.get(baseUrl + endpoint);
        setData(data.data);
      }
    })();
  }, [componentName, fullTime, query]);
  console.log(data);
  useEffect(() => {
    // const { country, description, fullTime } = query;
    if (data?.length > 0) {
      setRefreshing(false);
    } else {
      if (componentName.toLocaleLowerCase() === "home") {
        setRefreshing(false);
      } else {
        setRefreshing(true);
      }
    }
  }, [data, setRefreshing, componentName]);
  return (
    <ScrollView
      style={styles.screen}
      stickyHeaderIndices={[0]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          style={styles.screen__refresh}
        />
      }
    >
      {componentName.toLocaleLowerCase() === "home" ? (
        <Form data={data} setQuery={setQuery} />
      ) : (
        <View style={styles.screen__controls}>
          {refreshing ? (
            <Text style={styles.screen__text1}> Searching for jobs...</Text>
          ) : (
            <Text style={styles.screen__text1}>
              {data?.length} jobs found {country !== "" && `in ${country}`}
            </Text>
          )}

          <View style={styles.screen__controls__switch}>
            <Text style={styles.screen__text2}>Full Time</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={fullTime ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setFullTime((prevState) => !prevState)}
              value={fullTime}
            />
          </View>
        </View>
      )}
      {data?.map((job) => (
        <Card key={job?.id} job={job} />
      ))}
    </ScrollView>
  );
};

export default Screen;
