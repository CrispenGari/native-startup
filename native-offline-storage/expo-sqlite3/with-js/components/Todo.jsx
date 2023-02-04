import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { db } from "../db";
import { ALL_TODOS_COMMAND, UPDATE_TODOS_COMMAND } from "../commands";

const Todo = ({ todo, setTodos }) => {
  const updateTodo = () => {
    db.transaction((transaction) => {
      transaction.executeSql(
        UPDATE_TODOS_COMMAND,
        [todo.completed ? 0 : 1, todo.id],
        (transaction, { rows }) => {
          transaction.executeSql(ALL_TODOS_COMMAND, [], (_, { rows }) =>
            setTodos(rows._array)
          );
        },
        (transaction, { message }) => console.log(message)
      );
    });
  };
  return (
    <TouchableOpacity
      onPress={updateTodo}
      style={{
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        margin: 2,
        backgroundColor: todo.completed ? "cornflowerblue" : "white",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          color: todo.completed ? "white" : "black",
        }}
      >
        {todo.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Todo;
