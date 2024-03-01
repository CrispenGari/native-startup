import { View, Text, Button } from "react-native";
import React from "react";

const Like = ({ onPress }: { onPress: () => void }) => {
  return (
    <View>
      <Button title="Like" onPress={onPress} />
    </View>
  );
};

export default Like;
