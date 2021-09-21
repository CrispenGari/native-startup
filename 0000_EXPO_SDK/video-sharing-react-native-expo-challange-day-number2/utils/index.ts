import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'
const openVideoSync = async ()=>{
    let permision = await ImagePicker.getCameraRollPermissionsAsync()
    // if theres no permision ask permision
    if(permision.granted === false){
      await ImagePicker.requestCameraRollPermissionsAsync().then(res=>{
        // console.log(res)
      }).catch(error=>{
        console.log(error)
      }).finally(async ()=>{
        permision = await ImagePicker.getCameraRollPermissionsAsync()
      })
    }
    // console.log(permision)
    if(permision.granted){
        const result = await ImagePicker.launchImageLibraryAsync({
          videoMaxDuration: 30,
          allowsMultipleSelection: true,
          mediaTypes: ImagePicker.MediaTypeOptions.Videos,
          allowsEditing: true,
          quality: 1,
        })
        return result
        // console.log(result);
    }
}
const openShareDialogAsync = async(videoURI)=>{
    if(!(await Sharing.isAvailableAsync())){
        return alert("Sharing is not available on this platform")
    }
    return await Sharing.shareAsync(videoURI)
}

export {openVideoSync,  openShareDialogAsync} 