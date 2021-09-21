import { Alert, BackHandler } from "react-native";
const btnAction = () => {
  Alert.alert(
    "Crisp Crisp Mailer",
    "Are you sure you want to exit Crisp Crisp Mailer?",
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
