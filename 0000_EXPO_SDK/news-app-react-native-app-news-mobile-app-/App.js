import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  YellowBox,
  BackHandler,
  Alert,
} from "react-native";
import {
  topHeadlineCountry,
  topHeadlinePerson,
  topHeadlineSources,
  topHeadlineBusiness,
  topHeadlineSport,
  topHeadlineHome,
} from "./axios-news-data";
import { Header } from "./Components";

import {
  Entypo,
  Ionicons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Sport, Business, Countries, People } from "./Screens";

const Tab = createBottomTabNavigator();
export default function App() {
  const [topheadlineCountry, settopheadlineCountry] = useState([]);
  const [topheadlinePerson, settopheadlinePerson] = useState([]);
  const [country, setCountry] = useState("");
  const [topheadlineBusiness, settopheadlineBusiness] = useState([]);
  const [topheadlineSport, settopheadlineSport] = useState([]);
  const [topheadlineHome, setTopheadlineHome] = useState([]);
  useEffect(() => {
    YellowBox.ignoreWarnings(["Animated: `useNativeDriver`"]);
  }, []);
  // Exiting an app
  useEffect(() => {
    const btnAction = () => {
      Alert.alert(
        "Closing the News App",
        "Are you sure you want to close the News App?",
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
  // Home news topSources
  useEffect(() => {
    const fetchTopSources = async (country) => {
      const source = await topHeadlineHome(country);
      setTopheadlineHome(source);
    };
    fetchTopSources();
  }, [country]);
  // use effect for headlines of Sports
  useEffect(() => {
    const fetchTopheadlineSport = async () => {
      const topheadlinesport = await topHeadlineSport();
      settopheadlineSport(topheadlinesport);
    };
    fetchTopheadlineSport();
  }, [country]);
  // console.log(topheadlineSport[0]);

  // use effect for headlines of a country
  useEffect(() => {
    const fetchTopheadlineCountry = async (country) => {
      const topheadlineCountry_ = await topHeadlineCountry(country);
      settopheadlineCountry(topheadlineCountry_);
    };
    fetchTopheadlineCountry();
  }, [country]);
  // use effect for headlines for Bss
  useEffect(() => {
    const fetchTopheadlineBussiness = async (country) => {
      const topheadlineBusiness_ = await topHeadlineBusiness(country);
      settopheadlineBusiness(topheadlineBusiness_);
    };
    fetchTopheadlineBussiness();
  }, [country]);

  // use effect for headlines of a people
  useEffect(() => {
    const fetchTopheadlinePerson = async (person) => {
      const topheadlinePerson_ = await topHeadlinePerson(person);
      settopheadlinePerson(topheadlinePerson_);
    };
    fetchTopheadlinePerson();
  }, [country]);

  return (
    <View style={styles.container}>
      <Header setCountry={setCountry} />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "tomato",
            activeBackgroundColor: "#ccc",
            inactiveTintColor: "#3A454E",
            keyboardHidesTabBar: true,
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                return <Entypo name="home" size={size} color={color} />;
              } else if (route.name === "Sport") {
                return (
                  <Ionicons name="ios-football" size={size} color={color} />
                );
              } else if (route.name === "Business") {
                return (
                  <FontAwesome5
                    name="business-time"
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === "People") {
                return <Ionicons name="ios-people" size={size} color={color} />;
              } else if (route.name === "Countries") {
                return (
                  <FontAwesome name="map-marker" size={size} color={color} />
                );
              }
            },
          })}
        >
          <Tab.Screen
            name="Home"
            children={() => <Home topheadlineHome={topheadlineHome} />}
            options={{
              tabBarBadge: topheadlineHome.length,
            }}
          />
          <Tab.Screen
            name="Sport"
            children={() => <Sport topheadlineSport={topheadlineSport} />}
            options={{
              tabBarBadge: topheadlineSport.length,
            }}
          />
          <Tab.Screen
            name="Business"
            children={() => (
              <Business topheadlineBusiness={topheadlineBusiness} />
            )}
            options={{
              tabBarBadge: topheadlineBusiness.length,
            }}
          />
          <Tab.Screen
            name="Countries"
            children={() => (
              <Countries topheadlineCountry={topheadlineCountry} />
            )}
            options={{
              tabBarBadge: topheadlineCountry.length,
            }}
          />
          <Tab.Screen
            name="People"
            children={() => <People topheadlinePerson={topheadlinePerson} />}
            options={{
              tabBarBadge: topheadlinePerson.length,
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
    paddingTop: 25,
    backgroundColor: "#fff",
  },
});
