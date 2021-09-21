import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'
import {BackHandler, Alert} from 'react-native'
import * as MediaLibrary from 'expo-media-library';
const openImagePickerSync = async ()=>{
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
        const result = await ImagePicker.launchImageLibraryAsync()
        return result
        // console.log(result);
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
    "Crisp Album",
    "Are you sure you want to exit Crisp Album?",
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
const handlePress = async ()=>{
  const permision = await MediaLibrary.getPermissionsAsync()
  if(permision.granted !== true){
      await MediaLibrary.requestPermissionsAsync()
  }else{
    const uri = "file:/data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fmobile-app-expo-again-challenge-4-e1700721-9dc7-4e4c-a435-bf2ead4dd6a8/ImagePicker/4e50f6fd-083b-4a3e-b2fe-4c14ff7bf982.jpg"
    // const asset = await MediaLibrary.saveToLibraryAsync(uri); // saving images
    // const asset = await MediaLibrary.getAssetsAsync({
    //   mediaType: MediaLibrary.MediaType.photo,
    //   first: 2000,

    // })
    const albums = await MediaLibrary.getAlbumsAsync() //returns the ulbum images
    const album = await MediaLibrary.getAlbumAsync("Music")
    // console.log(albums)
    const musics = await MediaLibrary.getAssetsAsync({
      album: "-532863272"
    })
    console.log("Musics are", musics)
    // const info = await MediaLibrary.getAssetInfoAsync("49853", {
    //   shouldDownloadFromNetwork: true
    // })
    // console.log(info)
  }
}
const getAllAlbumsAsync = async ()=>{
  const albums = await MediaLibrary.getAlbumsAsync()
  return albums
}
const getAllAlbumAssetsAsync = async (albumId: String, quantity)=>{
  if(albumId){
     const assets = await MediaLibrary.getAssetsAsync({
    album: albumId,
    mediaType: MediaLibrary.MediaType.photo,
    first: quantity
    })
    return assets
  }
 return []
}
export {openImagePickerSync,  openShareDialogAsync, btnAction, handlePress, getAllAlbumsAsync, getAllAlbumAssetsAsync} 