import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../assets/colors";
import { MaterialIcons } from "@expo/vector-icons";
interface Item {
  id: string;
  name: string;
  picture: string;
}
interface Props {
  index?: number;
  item: Item;
  separators?: any;
  theme?: string;
}
const Story: React.FC<Props> = ({ item, theme }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        padding: item?.name === "crispen" ? 5 : 0,
      }}
    >
      {item?.name === "crispen" ? (
        <View
          style={{
            position: "relative",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: 15,
              height: 15,
              borderRadius: 10,
              position: "absolute",
              backgroundColor: COLORS.TWITTER_MAIN_COLOR,
              top: 35,
              right: 0,
              zIndex: 8,
            }}
          >
            <MaterialIcons name="add" size={15} color="white" />
          </TouchableOpacity>
          <Image
            source={{
              uri: item.picture,
            }}
            style={{
              width: item?.name === "crispen" ? 50 : 60,
              height: item?.name === "crispen" ? 50 : 60,
              borderRadius: 30,
              marginBottom: 5,
              borderWidth: item?.name === "crispen" ? 0 : 3,
              borderColor: COLORS.TWITTER_MAIN_COLOR,
            }}
          />
        </View>
      ) : (
        <Image
          source={{
            uri: item.picture,
          }}
          style={{
            width: item?.name === "crispen" ? 50 : 60,
            height: item?.name === "crispen" ? 50 : 60,
            borderRadius: 30,
            marginBottom: 5,
            borderWidth: item?.name === "crispen" ? 0 : 3,
            borderColor: COLORS.TWITTER_MAIN_COLOR,
          }}
        />
      )}
      <Text
        style={{
          color: "gray",
          fontSize: 10,
          marginTop: item?.name === "crispen" ? 5 : 0,
        }}
      >
        {item?.name === "crispen" ? "add" : item?.name}
      </Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({});
