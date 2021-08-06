import React from "react";
import { Text, TouchableOpacity } from "react-native";
import data from "../assets/images";

const Tab: React.FC<any> = React.forwardRef(
  ({ item, onTabPress }, ref: any) => {
    return (
      <TouchableOpacity ref={ref} onPress={onTabPress}>
        <Text
          style={{
            color: "white",
            fontFamily: "AssistantRegular",
            fontSize: 75 / data.length,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }
);
export default Tab;
