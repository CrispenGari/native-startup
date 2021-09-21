import React, {useState, useEffect} from 'react';
import {  View , BackHandler} from 'react-native';
import {btnAction} from './utils'
import  styles from './AppStyles'
import {Main, Header} from './Components'
export default function App() {
  console.disableYellowBox = true;
  useEffect(() => {
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
     <Header  />
     <Main  />
    </View>
  );
}

