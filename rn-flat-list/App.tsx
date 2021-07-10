import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import {
  StyleSheet,
  RefreshControl,
  View,
  FlatList,
  ActionSheetIOS,
} from "react-native";
import List from "./components/List/List";

type ActionType = {
  payload: any;
  type: string;
};
const initialState = {
  companies: [],
};
const reducer = (state = [], action: ActionType) => {
  switch (action.type) {
    case "SET_COMPANIES":
      return (state = action.payload);
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [data, dispatch] = React.useReducer(reducer, initialState);
  const [refreshing, setRefreshing] = React.useState(false);

  const refetchData = () => {
    setRefreshing(true);
    setInterval(() => {
      setRefreshing(!true);
    }, 1000);
  };
  useEffect(() => {
    if (refreshing) {
      fetch("https://random-data-api.com/api/company/random_company?size=100")
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: "SET_COMPANIES",
            payload: data?.map((ele: any) => ({
              id: ele.id,
              suffix: ele.suffix,
              industry: ele.industry,
              uid: ele.uid,
            })),
          });
        });
    }
  }, [refreshing]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        style={styles.flatlist}
        data={data}
        renderItem={(item: any) => <List item={item} />}
        keyExtractor={(item) => item.uid}
        refreshing={true}
        horizontal={false}
        onEndReached={refetchData}
        inverted={!true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refetchData} />
        }
      ></FlatList>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
  },
  flatlist: {
    flex: 1,
    width: "100%",
    paddingVertical: 10,
  },
});
