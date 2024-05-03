import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Landing = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Landing</Text>

      <Link href={"/options"} asChild>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            marginVertical: 20,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Getting Started</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Landing;
