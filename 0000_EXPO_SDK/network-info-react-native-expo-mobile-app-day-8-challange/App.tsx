import React, {useState} from 'react';
import {  View , BackHandler, Alert, Button} from 'react-native';
import  styles from './AppStyles'
import {Main, Header} from './Components'
import {btnAction} from './utils'
import * as Network from 'expo-network'
export default function App() {
  console.disableYellowBox = true;
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
     <Header />
     <Main/>
    </View>
  );
}

