import React, {useEffect, useState} from 'react';
import {  View , BackHandler, Button, Text, StyleSheet, LogBox} from 'react-native';
import  styles from './AppStyles'
import {Main, Header} from './Components'
import {btnAction} from './utils'
import constants from './utils/constants'
import {getCurrentOrientationAsync} from './utils'
export default function App() {
  LogBox.ignoreAllLogs()
  const [orientation, setOrientation] = useState(null)
  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      btnAction
    );
    return () => {
      backHandler.remove();
    };
  }, []);
  useEffect(()=>{
      getCurrentOrientationAsync().then(result=>{
        setOrientation(result)
      })
  }, [] )
  return (
    <View style={styles.container}>
     <Header/>
     <Main orientation={orientation} setOrientation={setOrientation}/>
    </View>
  );
}

