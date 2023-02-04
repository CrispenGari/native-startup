import { View, TextInput } from "react-native";
import React, { useState } from "react";
import { db } from "../db";
import { ALL_TODOS_COMMAND, INSERT_TODO_COMMAND } from "../commands";
const Form = ({
  setTodos,
}: {
  setTodos: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  const [text, setText] = useState("");
  const addTodo = () => {
    //  add todo to the database
    if (!text) {
      return false;
    }
    db.transaction((tx) => {
      tx.executeSql(
        INSERT_TODO_COMMAND,
        [text],
        (transaction, { rows }) => {
          console.log(rows.item);
        },
        (transaction, { message }): any => {
          console.log(message);
        }
      );
      tx.executeSql(ALL_TODOS_COMMAND, [], (_, { rows }) =>
        setTodos(rows._array)
      );
      setText("");
    });
  };
  return (
    <TextInput
      value={text}
      onChangeText={(t) => setText(t)}
      placeholder={"Todo Title..."}
      style={{
        margin: 10,
        fontSize: 20,
        borderWidth: 1,
        width: "80%",
        padding: 10,
        borderRadius: 5,
      }}
      onSubmitEditing={addTodo}
    />
  );
};

export default Form;
