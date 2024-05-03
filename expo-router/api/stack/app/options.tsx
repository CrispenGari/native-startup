import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const OptionsModal = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/login"} asChild replace>
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
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/login"} asChild replace>
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
          <Text style={{ color: "white" }}>Register</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default OptionsModal;
