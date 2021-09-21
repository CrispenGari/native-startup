import {Alert, BackHandler} from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation';
import constants from '../utils/constants'
  const btnAction = () => {
    Alert.alert(
      "Crisp Orientation",
      "Are you sure you want to exit Crisp Orientation?",
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
const restoreOriantationAsync = async ()=>{
    return await ScreenOrientation.unlockAsync()
}
const changeScreenLockOrientationAsync = async (value) =>{
  switch(value){
    case constants.LOCK_ALL:
      return  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    case constants.LOCK_LANDSCAPE:
      return  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    case constants.LOCK_POTRAIT:
      return  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    case constants.LOCK_LANDSCAPE_LEFT:
      return  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    case constants.LOCK_LANDSCAPE_RIGHT:
      return  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    case constants.LOCK_POTRAIT_UP:
      return  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    case constants.LOCK_POTRAIT_DOWN:
      return  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_DOWN);
    case constants.LOCK_UNKNOWN:
      return  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.UNKNOWN);
    case constants.LOCK_OTHER:
      return  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.OTHER);      
    default:
      return  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
  }
}
const getCurrentOrientationAsync = async ()=>{
  return await ScreenOrientation.getOrientationAsync()
}
const getOrientationLockAsync = async ()=>{
  return await ScreenOrientation.getOrientationLockAsync()
}

export {btnAction, changeScreenLockOrientationAsync, restoreOriantationAsync, getCurrentOrientationAsync, getOrientationLockAsync} 