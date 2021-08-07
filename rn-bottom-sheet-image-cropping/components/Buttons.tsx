import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const Buttons: React.FC<{
  setSuggestions: any;
  setAvatar: any;
  closeSheet: any;
}> = ({ setAvatar, setSuggestions, closeSheet }) => {
  const pickImageFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3], // you can change the aspect for cropping image nicely
      quality: 1,
    });
    setAvatar(result);
    setSuggestions((prev: any) => [...prev, result]);
    closeSheet();
  };
  const takeImageFromCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setAvatar(result);
    setSuggestions((prev: any) => [...prev, result]);
    closeSheet();
  };

  return (
    <View
      style={{ padding: 10, justifyContent: "center", alignItems: "center" }}
    >
      <TouchableOpacity
        onPress={pickImageFromGallery}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
          width: "70%",
        }}
      >
        <Text
          style={{
            color: "cornflowerblue",
            fontSize: 20,
          }}
        >
          Choose from gallery
        </Text>
        <AntDesign name="picture" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={takeImageFromCamera}
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
          width: "70%",
        }}
      >
        <Text
          style={{
            color: "cornflowerblue",
            fontSize: 20,
          }}
        >
          Take a new photo
        </Text>
        <Feather name="camera" size={24} color="gray" />
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: "cornflowerblue",
          borderBottomWidth: 0.5,
          width: "100%",
          marginTop: 20,
        }}
      />
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
