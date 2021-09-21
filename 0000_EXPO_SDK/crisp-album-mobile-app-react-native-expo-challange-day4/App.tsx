import React, {useState} from 'react';
import {  View , BackHandler, Alert, Button} from 'react-native';
import  styles from './AppStyles'
import {Main, Header} from './Components'
import {btnAction, openImagePickerSync} from './utils'
export default function App() {
  console.disableYellowBox = true;
  const [albumAssets, setAlbumAssets] = useState(null)
  const [albumName, setAlbumName] = useState(null)
  const [image, setImage] = useState(null)
  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      btnAction
    );
    return () => {
      backHandler.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
        <Header setAlbumAssets={setAlbumAssets} albumAssets={albumAssets} setImage={setImage} albumName={albumName}/>
        <Main setAlbumAssets={setAlbumAssets} setImage={setImage} image={image} albumName={albumName} setAlbumName={setAlbumName} albumAssets={albumAssets}/>
    </View>
  );
}

/*
Object {
  "cancelled": false,
  "height": 3096,
  "type": "image",
  "uri": "file:/data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fmobile-app-expo-again-challenge-4-e1700721-9dc7-4e4c-a435-bf2ead4dd6a8/ImagePicker/4e50f6fd-083b-4a3e-b2fe-4c14ff7bf982.jpg",
  "width": 4128,
}

*/