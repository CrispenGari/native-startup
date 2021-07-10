import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, Image, LinearProgress } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";

import { storage, db } from "../firebase";
const Form = () => {
  const [data, setData] = useState(null);
  const [progress, setProgress] = useState(0);

  const upload = () => {
    db.collection("posts")
      .add({
        username: "username",
        email: "test@gmail.com",
      })
      .then(async (doc) => {
        if (data?.uri) {
          const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
              resolve(xhr.response);
            };
            xhr.onerror = function (e) {
              console.log(e);
              reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", data?.uri, true);
            xhr.send(null);
          });
          const uploadTask = storage.ref(`images/${doc.id}`).put(blob);
          uploadTask.on(
            "state_changed",
            (obs) => {
              setProgress(obs.bytesTransferred / obs.totalBytes);
            },
            (error) => {
              console.error(error);
            },
            () => {
              storage
                .ref(`images`)
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      imageUrl: url,
                    },
                    { merge: true }
                  );
                })
                .then(() => {
                  setData(null);
                  setProgress(0);
                });
            }
          );
        }
      })
      .catch((err) => console.error(err));
  };

  const selectImage = async () => {
    const permission = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    }
    const cameraPermission = await ImagePicker.getCameraPermissionsAsync();
    if (!cameraPermission.granted) {
      await ImagePicker.requestCameraPermissionsAsync();
    }
    const result =
      (await ImagePicker.launchImageLibraryAsync({
        base64: true,
        allowsMultipleSelection: false,
      })) || (await ImagePicker.launchCameraAsync());

    setData(result);
    return;
  };
  return (
    <View style={styles.form}>
      <Text h5> Select an Image</Text>
      <Button
        title="Select"
        type="outline"
        buttonStyle={{
          width: 200,
          margin: 20,
        }}
        onPress={selectImage}
      />

      {data && (
        <View>
          <Image
            source={{
              uri: data?.uri,
            }}
            style={styles.image}
          />
          <Button
            title="Remove"
            type="outline"
            buttonStyle={{
              width: 200,
              margin: 20,
            }}
            onPress={() => setData(null)}
          />
          <Button
            title="Upload"
            type="clear"
            buttonStyle={{
              width: 200,
              margin: 20,
            }}
            onPress={upload}
          />
        </View>
      )}
      {progress ? (
        <LinearProgress
          value={progress}
          variant="determinate"
          color="primary"
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default Form;
const styles = StyleSheet.create({
  form: {
    width: "90%",
    borderColor: "lightgray",
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
    borderRadius: 5,
  },
});
