import { TextInput } from "react-native";
import React, { useState } from "react";
import { getData, setData } from "../utils";

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<any[]>>;
}
const Form: React.FC<Props> = ({ setTodos }) => {
  const [text, setText] = useState("");
  const addTodo = async () => {
    //  add todo to the database
    if (!text) {
      return false;
    }
    const { data, error } = await getData("todos");
    console.log("data", data);
    if (error) {
      console.log(error);
      return;
    }
    const todos = data
      ? [{ title: text, id: data.length, completed: false }, ...data]
      : [{ title: text, id: 0, completed: false }];

    setTodos(todos);
    const res = await setData("todos", todos);
    if (res.error === false) setText("");
    console.log(res);
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
