import { Camera } from "expo-camera";

import questions from "./questions";
const constants = {
  QUESTIONS: questions,
  BACK_CAMERA: Camera.Constants.Type.back,
  FRONT_CAMERA: Camera.Constants.Type.front,
  FLASH_AUTO: Camera.Constants.FlashMode.auto,
  FLASH_ONN: Camera.Constants.FlashMode.on,
  FLASH_OFF: Camera.Constants.FlashMode.off,
  FLASH_TORCH: Camera.Constants.FlashMode.torch,
  SOUNDS: [
    "../../sounds/beep-01.mp3",
    "../../sounds/beep-02.mp3",
    "../../sounds/beep-03.mp3",
    "../../sounds/beep-04.mp3",
    "../../sounds/beep-05.mp3",
    "../../sounds/beep-06.mp3",
    "../../sounds/beep-07.mp3",
    "../../sounds/beep-08.mp3",
    "../../sounds/beep-09.mp3",
    "../../sounds/beep-10.mp3",
  ],
};

export default constants;
