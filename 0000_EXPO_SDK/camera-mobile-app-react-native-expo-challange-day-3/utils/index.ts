import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'
import {BackHandler, Alert} from 'react-native'
import constants from './constants'
const openCameraSync = async (CAMERA_TYPE)=>{
    let permision = await ImagePicker.getCameraRollPermissionsAsync()
    // if theres no permision ask permision
    if(permision.granted === false){
      await ImagePicker.requestCameraRollPermissionsAsync().then(res=>{
      }).catch(error=>{
        console.log(error)
      }).finally(async ()=>{
        permision = await ImagePicker.getCameraRollPermissionsAsync()
      })
    }
    if(permision.granted){
      switch (CAMERA_TYPE) {
        case constants.VIDEO_CAMERA:
          const result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Videos,
              quality: 1,
              videoQuality:1,
              videoMaxDuration: 30,
              allowsEditing: true
          })
          return result
        case constants.PHOTO_CAMERA:
            const result_ = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        })
         return result_
        default:
          break;
      }
    }
}
const openShareDialogAsync = async(imageURI)=>{
    if(!(await Sharing.isAvailableAsync())){
        return alert("Sharing is not available on this platform")
    }
    return await Sharing.shareAsync(imageURI)
}
const btnAction = () => {
  Alert.alert(
    "Crisp Camera",
    "Are you sure you want to exit Crisp Camera?",
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
export {openCameraSync,  openShareDialogAsync, btnAction} 