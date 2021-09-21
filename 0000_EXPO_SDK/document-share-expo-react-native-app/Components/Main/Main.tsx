import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./MainStyles";
import * as DocumentPicker from "expo-document-picker";
import { shareAsync } from "../../utils";
const Main = () => {
  const [document, setDocument] = useState(null);
  const selectDocument = async () => {
    await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: true,
      multiple: false,
      type: "application/pdf",
    })
      .then((result) => {
        setDocument(result);
        if (result?.type === "success") {
          shareAsync(result?.uri)
            .then((res) => {
              return setDocument(null);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.main}>
      <Text style={styles.main__text1}>Selected a Document (pdf) to share</Text>
      {!document && (
        <Image
          style={{ width: 100, height: 100, marginVertical: 150 }}
          source={{ uri: "https://i.gifer.com/ZZ5H.gif" }}
        />
      )}
      <View style={styles.main__controls}>
        <TouchableOpacity style={styles.main__open} onPress={selectDocument}>
          <FontAwesome5 name="file-pdf" size={25} color="lightseagreen" />
          <Text style={styles.main__controltext}>
            Select A Document To share
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Main;
