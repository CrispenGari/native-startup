import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import avatarPlaceholder from "../assets/images";
import { Ionicons } from "@expo/vector-icons";
const Avatar: React.FC<{ item: any; setSuggestions: any; setAvatar: any }> = ({
  item,
  setSuggestions,
  setAvatar,
}) => {
  const removeFromSuggestions = (item: any) => {
    setSuggestions((prev: any[]) =>
      prev.filter((image: any) => image?.uri !== item?.uri)
    );
  };
  return (
    <View style={{ marginRight: 10 }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => removeFromSuggestions(item)}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 10,
          backgroundColor: "gray",
          width: 20,
          height: 20,
          borderRadius: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="close" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{}}
        activeOpacity={0.7}
        onPress={() => setAvatar(item)}
      >
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 60,
            resizeMode: "cover",
          }}
          source={{
            uri: item?.uri
              ? item?.uri
              : Image.resolveAssetSource(avatarPlaceholder).uri,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;
