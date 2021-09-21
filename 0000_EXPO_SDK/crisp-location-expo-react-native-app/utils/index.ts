import { Alert, BackHandler } from "react-native";
const btnAction = () => {
  Alert.alert(
    "Crisp Location",
    "Are you sure you want to exit Crisp Location?",
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
