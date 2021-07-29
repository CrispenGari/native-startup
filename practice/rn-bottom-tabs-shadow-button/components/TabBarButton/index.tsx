import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";
const TabBarIcon: React.FC<any> = ({
  onPress,
  children,
  accessibilityState,
}) => {
  const selected = accessibilityState.selected;

  if (selected) {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            top: 0,
          }}
        >
          {/* <View style={{ flex: 1 }} /> */}
          <Svg width={70} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={"#fafafa"}
            />
          </Svg>
          {/* <View style={{ flex: 1 }} /> */}
        </View>
        <View
          style={{
            top: -22.5,
            justifyContent: "center",
            alignItems: "center",
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: "white",
          }}
        >
          {children}
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

export default TabBarIcon;

const styles = StyleSheet.create({});
