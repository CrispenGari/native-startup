import { BackHandler, Alert } from "react-native";
import constants from "./constants";
const btnAction = () => {
  Alert.alert(
    "Crisp Camera",
    "Are you sure you want to exit Crisp Camera?",
    [
      {
        text: "cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "yes",
        onPress: () => BackHandler.exitApp(),
        style: "destructive",
      },
    ],
    {
      cancelable: !true,
    }
  );
  return true;
};
export { btnAction };
