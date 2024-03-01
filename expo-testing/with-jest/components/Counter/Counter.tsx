import { View, Text, TextInput, Button } from "react-native";
import React from "react";

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = React.useState(value);
  const [amount, setAmount] = React.useState(0);
  return (
    <View>
      <Text testID="count">{count}</Text>
      <TextInput
        value={amount.toString()}
        onChangeText={(text) => setAmount(parseInt(text))}
        placeholder="Amount"
      />
      <Button title="Increment" onPress={() => setCount((s) => s + amount)} />
      <Button title="Decrement" onPress={() => setCount((s) => s - amount)} />
    </View>
  );
};

export default Counter;
