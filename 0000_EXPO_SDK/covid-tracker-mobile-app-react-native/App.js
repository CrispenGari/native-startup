import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert, BackHandler } from "react-native";
import { Header } from "./Components";
import { NavigationContainer } from "@react-navigation/native";
// npm install --save react-native-gesture-handler react-native-reanimated react-native-screens
import Deaths from "./Screens/Deaths";
import Home from "./Screens/Home";
import Recover from "./Screens/Recover";
import Infected from "./Screens/Infected";
import { fetchData, fetchDailyData, fetchCountries } from "./axios-data";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { numFormatter } from "./number-format";
import {
  AntDesign,
  Entypo,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function App() {
  const [data, setData] = useState({});
  const [countries, setCountries] = useState([]);
  const [daily, setDaily] = useState({});
  const [country, setCountry] = useState("");
  const [confirmed, setConfirmed] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [piechat, setPieChat] = useState([]);
  const [barchat, setBarChat] = useState({});
  const [dataforlabels, setDataForLabels] = useState({});
  useEffect(() => {
    const btnAction = () => {
      Alert.alert(
        "Exit the app",
        "Are you sure you the Covid-19 tracker App?",
        [
          //  These are buttons for the alert
          {
            text: "cancel",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "yes",
            // close the app
            onPress: () => BackHandler.exitApp(),
            style: "destructive",
          },
        ]
      );
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      btnAction
    );
    // some cleanUpp actions for the effect

    return () => {
      backHandler.remove();
    };
  }, []);

  useEffect(() => {
    // when we are using an ansyc function in the use effect hook we must create another function
    const fetchData_ = async () => {
      const data_ = await fetchData(country[0]);
      setData(data_);
    };
    fetchData_();
  }, [country]);
  // use effect of fetching countries
  useEffect(() => {
    // when we are using an ansyc function in the use effect hook we must create another function
    const fetchCountries_ = async () => {
      const countries_ = await fetchCountries();
      setCountries(countries_);
    };
    fetchCountries_();
  }, []);

  // use Effect of getting daily data
  useEffect(() => {
    // when we are using an ansyc function in the use effect hook we must create another function
    const fetchDaily_ = async () => {
      const daily_ = await fetchDailyData();
      setDaily(daily_);
    };
    fetchDaily_();
  }, []);
  useEffect(() => {
    if (data === undefined) {
      console.log("undefined");
    } else {
      setConfirmed(data.confirmed);
      setRecovered(data.recovered);
      setDeaths(data.deaths);
      setDataForLabels({
        deaths: deaths ? deaths?.value : 0,
        confirmed: confirmed ? confirmed?.value : 0,
        recovered: recovered ? recovered?.value : 0,
      });
      setPieChat([
        {
          name: "confirmed",
          population: confirmed ? confirmed?.value : 0,
          color: "orange",
          legendFontColor: "#7F7F7F",
          legendFontSize: 10,
        },
        {
          name: "deaths",
          population: deaths ? deaths?.value : 0,
          color: "#F00",
          legendFontColor: "#7F7F7F",
          legendFontSize: 10,
        },
        {
          name: "recovered",
          population: recovered ? recovered?.value : 0,
          color: "green",
          legendFontColor: "#7F7F7F",
          legendFontSize: 10,
        },
      ]);
    }
  }, [data, country, confirmed, deaths, recovered]);

  return (
    <View style={styles.container}>
      <Header />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                return <Entypo name="home" size={size} color={color} />;
              } else if (route.name === "Infected") {
                return (
                  <Fontisto name="bed-patient" size={size} color={color} />
                );
              } else if (route.name === "Recoveries") {
                return (
                  <MaterialCommunityIcons
                    name="face-recognition"
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "Deaths") {
                return <AntDesign name="warning" size={size} color={color} />;
              } else {
                return;
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen
            name="Home"
            children={() => (
              <Home
                countries={countries}
                setCountry={setCountry}
                country_selected={country}
                piechat={piechat}
                barchat={barchat}
                dataforlabels={dataforlabels}
                data={data}
              />
            )}
            // component={Home}
            options={{
              tabBarBadge: "new",
            }}
          />
          <Tab.Screen
            name="Infected"
            children={() => (
              <Infected
                countries={countries}
                country_selected={country}
                piechat={piechat}
                dataforlabels={dataforlabels}
                barchat={barchat}
                data={data}
              />
            )}
            // component={Infected}
            options={{
              tabBarBadge: numFormatter(Number.parseInt(confirmed?.value)),
            }}
          />
          <Tab.Screen
            name="Recoveries"
            children={() => (
              <Recover
                countries={countries}
                countries={countries}
                country_selected={country}
                piechat={piechat}
                dataforlabels={dataforlabels}
                barchat={barchat}
                data={data}
              />
            )}
            // component={Recover}
            options={{
              tabBarBadge: numFormatter(Number.parseInt(recovered?.value)),
            }}
          />
          <Tab.Screen
            name="Deaths"
            // component={Deaths}
            children={() => (
              <Deaths
                countries={countries}
                country_selected={country}
                piechat={piechat}
                barchat={barchat}
                dataforlabels={dataforlabels}
                data={data}
              />
            )}
            options={{
              tabBarBadge: numFormatter(Number.parseInt(deaths?.value)),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 25,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
