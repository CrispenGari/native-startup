import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import avatarPlaceholder from "../assets/images";

const Profile: React.FC<{ openSheet: any; avatar: any }> = ({
  openSheet,
  avatar,
}) => {
  return (
    <View
      style={{
        padding: 20,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          overflow: "hidden",
          marginBottom: 20,
        }}
        activeOpacity={0.7}
        onPress={openSheet}
      >
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 150,
            resizeMode: "cover",
          }}
          source={{
            uri: avatar?.uri
              ? avatar?.uri
              : Image.resolveAssetSource(avatarPlaceholder).uri,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderColor: "cornflowerblue",
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 5,
          paddingVertical: 5,
        }}
        activeOpacity={0.7}
        onPress={openSheet}
      >
        <Text
          style={{
            color: "cornflowerblue",
            fontSize: 17,
          }}
        >
          change avatar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
