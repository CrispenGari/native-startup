import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { getData, setData } from "../utils";

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<any[]>>;
  todo: any;
}
const Todo: React.FC<Props> = ({ todo, setTodos }) => {
  const updateTodo = async () => {
    const { data, error } = await getData("todos");
    console.log("data", data);
    if (error) {
      console.log(error);
      return;
    }
    console.log(todo.id);
    const todos = data?.map((ele: any) => {
      if (ele.id === todo.id) {
        return {
          ...ele,
          completed: !ele.completed,
        };
      }
      return { ...ele };
    });
    setTodos(todos);
    const res = await setData("todos", todos);
    console.log(res);
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
