import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../assets/colors";

interface Props {
  Icon?: JSX.Element;
  focused: boolean;
  label?: string;
  content?: string;
}
const CustomTab: React.FC<Props> = ({ Icon, focused, label, content }) => {
  if (Icon) {
    return <View style={{}}>{Icon}</View>;
  }
  return (
    <View style={{}}>
      {content === "status" ? (
        <View
          style={{
            backgroundColor: focused ? "white" : COLORS.TAB_COLOR,
            position: "absolute",
            width: 10,
            height: 10,
            zIndex: 10,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            top: "20%",
            right: -15,
          }}
        />
      ) : content !== "" ? (
        <View
          style={{
            backgroundColor: focused ? "white" : COLORS.TAB_COLOR,
            position: "absolute",
            width: 20,
            height: 20,
            zIndex: 10,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            top: -8,
            right: -20,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontWeight: "bold",
            }}
          >
            {content}
          </Text>
        </View>
      ) : null}
      <Text
        style={{
          fontWeight: "bold",
          color: focused ? "white" : COLORS.TAB_COLOR,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default CustomTab;

const styles = StyleSheet.create({});
