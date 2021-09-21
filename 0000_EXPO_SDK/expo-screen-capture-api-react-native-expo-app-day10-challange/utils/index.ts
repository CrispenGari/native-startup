import { Alert, BackHandler} from 'react-native'

import * as ScreenCapture from 'expo-screen-capture'
const btnAction = () => {
  Alert.alert(
    "Crisp Screen Capture",
    "Are you sure you want to exit Crisp Screen Capture?",
    [{
        text: "cancel",
        onPress: () => null,
        style: "cancel",
      }, {
        text: "yes",
        onPress: () => BackHandler.exitApp(),
        style: "destructive",
      },
  
    ],{
      cancelable: !true
    }

  );
  return true;
};

const screenCaptureHandler = async ()=>{
  return {
    PREVENT_SCREEN_CAPTURE: await ScreenCapture.usePreventScreenCapture(),
    PREVENT_SCREEN_CAPTUREASYNC: await ScreenCapture.preventScreenCaptureAsync(),
    ALLOW_SCREEN_CAPTUREASYNC : await ScreenCapture.allowScreenCaptureAsync()
  }
}
export {btnAction, screenCaptureHandler} 