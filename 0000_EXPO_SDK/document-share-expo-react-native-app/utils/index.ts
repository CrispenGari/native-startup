import { Alert, BackHandler } from "react-native";
import * as Sharing from "expo-sharing";

const options = {
  dialogTitle: "Sharing Documents",
  mimeType: "application/json",
};
const shareAsync = async (url: String) => {
  if (Sharing.isAvailableAsync() && url) {
    await Sharing.shareAsync(url, options)
      .then((res) => {
        return {
          message: "success",
          data: res,
        };
      })
      .catch((err) => {
        return { message: "error", error: err };
      });
  }
};
const btnAction = () => {
  Alert.alert(
    "Crisp PDF Share",
    "Are you sure you want to exit Crisp PDF Share?",
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
export { btnAction, shareAsync };
