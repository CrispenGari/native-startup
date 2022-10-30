import { useEffect, useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { ALL_TODOS_COMMAND, CREATE_TABLE_COMMAND } from "./commands";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { db } from "./db";

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        CREATE_TABLE_COMMAND,
        [],
        (_, { rows }) => {
          console.log("Table created successifully.");
          console.log(rows);
        },
        (_, { message }) => {
          console.log("We have an error.");
          console.log(message);
        }
      );
    });
  }, []);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      db.transaction((transaction) => {
        transaction.executeSql(
          ALL_TODOS_COMMAND,
          [],
          (transaction, { rows }) => setTodos(rows._array),
          (transaction, { message }) => console.log(message)
        );
      });
    }
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Text style={{ fontSize: 30, fontWeight: "800", textAlign: "center" }}>
          SQLite Example
        </Text>
        <Form setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </SafeAreaView>
    </View>
  );
};

export default App;
