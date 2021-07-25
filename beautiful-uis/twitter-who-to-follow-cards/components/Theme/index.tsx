import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { COLORS } from "../../assets/colors";

const Theme: React.FC<any> = ({ setTheme }) => {
  const [value, setValue] = useState(false);
  React.useEffect(() => {
    setTheme(value ? COLORS.DARK_BACKGROUND : COLORS.LIGHT_BACKGROUND);
  }, [value]);

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: 100,
      }}
    >
      <Text
        style={{
          marginBottom: 20,
          fontSize: 20,
          color: value ? "white" : "black",
        }}
      >
        {value ? "DARK THEME" : "LIGHT THEME"}
      </Text>
      <Switch
        trackColor={{ false: "lightblue", true: "cornflowerblue" }}
        thumbColor={value ? "lightblue" : "lightseagreen"}
        ios_backgroundColor="#3e3e3e"
        value={value}
        style={{
          transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        }}
        onValueChange={() => setValue((prev) => !prev)}
      />
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({});
