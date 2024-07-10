import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
  ActivityIndicator,
} from "react-native";

import { useFonts } from "expo-font";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import API_KEY from "./keys";

const App = () => {
  const [loaded, error] = useFonts({
    AssistantExtraLight: require("./assets/fonts/Assistant-ExtraLight.ttf"),
    AssistantLight: require("./assets/fonts/Assistant-Light.ttf"),
    AssistantRegular: require("./assets/fonts/Assistant-Regular.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator color="lightseagreen" size="large" />;
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <SearchBar />
      </SafeAreaView>
    </View>
  );
};

export default App;

const SearchBar = () => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "red",
        flexDirection: "row",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "Your api key",
          language: "en",
          components: "country:za",
          types: "establishment",
          radius: 30000,
          location: `${37.78825}, ${-122.432}`,
        }}
        styles={{
          container: {
            flex: 0,
            width: "100%",
            zIndex: 1,
          },
          listView: { backgroundColor: "white", height: "100%" },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
});
