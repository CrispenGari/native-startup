import { FlatList, Text } from "react-native";
import React from "react";
import Todo from "./Todo";
const Todos = ({ todos, setTodos }) => {
  return (
    <FlatList
      contentContainerStyle={{
        height: "100%",
      }}
      ListHeaderComponent={() => (
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            fontWeight: "900",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          All Todos
        </Text>
      )}
      data={todos}
      renderItem={({ item, index }) => {
        return <Todo todo={item} key={index.toString()} setTodos={setTodos} />;
      }}
    />
  );
};

export default Todos;
