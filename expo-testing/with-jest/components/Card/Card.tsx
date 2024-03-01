import { View, Text } from "react-native";
import React from "react";

interface Props {
  name: string;
  email: string;
}
const Card: React.FunctionComponent<Props> = ({ name, email }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
};

export default Card;
