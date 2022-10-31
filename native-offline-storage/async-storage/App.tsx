import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { deleteData, getData } from "./utils";

export default function App() {
  const [todos, setTodos] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    (async () => {
      // await deleteData("todos");
      const { data } = await getData("todos");
      setTodos(data ?? []);
    })();
  }, []);

  console.log(todos);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Form setTodos={setTodos} />
        <Todos setTodos={setTodos} todos={todos} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
