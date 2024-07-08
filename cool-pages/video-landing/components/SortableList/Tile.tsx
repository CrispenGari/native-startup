import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SIZE } from "./Config";
const styles = StyleSheet.create({
  container: {
    width: SIZE - 20,
    height: 150,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    padding: 14,
    alignSelf: "center",
  },
});
interface TileProps {
  id: string;
  onLongPress: () => void;
}

const Tile = ({ id }: TileProps) => {
  return (
    <View style={styles.container} pointerEvents="none">
      <Text style={{ fontWeight: "500", fontSize: 16 }}>{id} this month</Text>
      <Text
        style={{
          color: "gray",
          fontWeight: "bold",
          fontSize: 26,
          paddingTop: 10,
        }}
      >
        1024€
      </Text>
    </View>
  );
};

export default Tile;
