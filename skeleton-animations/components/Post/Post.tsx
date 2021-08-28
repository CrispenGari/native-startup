import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { PostI } from "../../types";
import { Feather } from "@expo/vector-icons";
interface Props {
  data: PostI;
}
const Post: React.FC<Props> = ({ data }) => {
  return (
    <View
      style={{
        marginBottom: 5,
        backgroundColor: "#f5f5f5",
        padding: 5,
        borderRadius: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            marginRight: 10,
          }}
          source={{ uri: data.thumbnailUrl }}
        />
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            Post {data.id}
          </Text>
          <Text numberOfLines={3} ellipsizeMode="tail">
            {data.title}
          </Text>
        </View>
        <Feather style={{}} name="more-vertical" size={24} color="black" />
      </View>
      <Image
        style={{
          width: "100%",
          resizeMode: "contain",
          marginRight: 10,
          height: 400,
          borderRadius: 5,
        }}
        source={{ uri: data.thumbnailUrl }}
      />
      <Text
        style={{
          marginBottom: 10,
        }}
        numberOfLines={3}
        ellipsizeMode="tail"
      >
        {data.url}
      </Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
