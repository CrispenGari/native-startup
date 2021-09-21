import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as MediaLibrary from "expo-media-library";
import {
  MaterialIcons,
  Foundation,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import * as Audio from "expo-av";
import * as ExpoCamera from "expo-camera";
import * as FileSystem from "expo-file-system";
import constants from "../../utils/constants";
import styles from "./CameraStyles";
const Camera = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(constants.FRONT_CAMERA);
  const [question, setQuestion] = useState("Are you ready");
  const [flashMode, setFlashMode] = useState(constants.FLASH_OFF);
  const [recording, setRecording] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const permision = await Audio.Audio.getPermissionsAsync();
      if (permision.granted) {
      } else {
        return await Audio.Audio.requestPermissionsAsync();
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      if (await ExpoCamera.Camera.isAvailableAsync()) {
        const { status } = await ExpoCamera.Camera.requestPermissionsAsync();
        setHasPermission(status.granted);
      }
    })();
  }, []);

  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      const question_index =
        Math.floor(Math.random() * 1000) % constants.QUESTIONS.length;
      setQuestion(constants.QUESTIONS[question_index]);
      // play the simple beep sound
      (async () => {
        const sound = await Audio.Audio.Sound.createAsync(
          require("../../sounds/beep-01.mp3")
        );
        await sound.sound.playAsync();
      })();
    }, 1000);
    return () => {
      clearInterval(timeIntervalId);
    };
  }, []);

  const switchCamera = () => {
    return type === constants.FRONT_CAMERA
      ? setType(constants.BACK_CAMERA)
      : setType(constants.FRONT_CAMERA);
  };
  const changeFlashMode = () => {
    if (flashMode === constants.FLASH_OFF) {
      setFlashMode(constants.FLASH_ONN);
    } else if (flashMode === constants.FLASH_ONN) {
      setFlashMode(constants.FLASH_AUTO);
    } else if (flashMode === constants.FLASH_AUTO) {
      setFlashMode(constants.FLASH_TORCH);
    } else {
      setFlashMode(constants.FLASH_OFF);
    }
  };

  const record = async () => {
    setRecording(!recording);
    console.log("Recording, ", recording);
    const _media_roll_permision = await MediaLibrary.getPermissionsAsync();
    if (_media_roll_permision.granted) {
      console.log(_media_roll_permision);
    } else {
      const _media_roll_permision_final = await MediaLibrary.requestPermissionsAsync();
      console.log(_media_roll_permision_final);
    }
    if (recording) {
      const data = await cameraRef.current.recordAsync();
      console.log(data);
      if (data?.uri) {
        const assets = await MediaLibrary.createAssetAsync(data.uri);
      }
    } else {
      return cameraRef.current.stopRecording();
    }
  };
  return (
    <View style={styles.camera}>
      <ExpoCamera.Camera
        style={styles.camera__camera}
        type={type}
        flashMode={flashMode}
        ref={cameraRef}
      >
        <View style={styles.camera__question}>
          <Text style={styles.camera__question__text}>😇</Text>
          <Text style={styles.camera__question__text}>{question}</Text>
        </View>

        <View style={styles.buttons__container__top}>
          <TouchableOpacity style={styles.button} onPress={switchCamera}>
            <MaterialIcons
              name="switch-camera"
              size={30}
              color="lightseagreen"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttons__container__bottom}>
          <TouchableOpacity style={styles.button} onPress={changeFlashMode}>
            {flashMode === constants.FLASH_OFF ? (
              <Ionicons name="ios-flash-off" size={40} color="white" />
            ) : flashMode === constants.FLASH_ONN ? (
              <Entypo name="flash" size={40} color="white" />
            ) : flashMode === constants.FLASH_AUTO ? (
              <MaterialCommunityIcons
                name="flash-auto"
                size={40}
                color="white"
              />
            ) : (
              <Foundation name="lightbulb" size={40} color="white" />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              record();
            }}
          >
            <Foundation
              name="record"
              size={60}
              color={recording ? "red" : "lightseagreen"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              (async () => {
                const sound = await Audio.Audio.Sound.createAsync(
                  require("../../sounds/beep-02.mp3")
                );
                await sound.sound.playAsync();
              })();
            }}
          >
            <AntDesign name="picture" size={35} color="lightseagreen" />
          </TouchableOpacity>
        </View>
      </ExpoCamera.Camera>
    </View>
  );
};

export default Camera;
