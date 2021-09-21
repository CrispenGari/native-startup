import React, {useState} from 'react';
import {  View , BackHandler, Alert, LogBox} from 'react-native';
import  styles from './AppStyles'
import {Main, Header} from './Components'
import {btnAction} from './utils'
export default function App() {
  LogBox.ignoreAllLogs(true)
  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      btnAction
    );
    return () => {
      backHandler.remove();
    };
  }, []);
  const [media, setMedia] = useState(null)
  return (
    <View style={styles.container}>
     <Header setMedia ={setMedia}/>
     <Main media={media} setMedia ={setMedia}/>
    </View>
  );
  console.clear()
}

