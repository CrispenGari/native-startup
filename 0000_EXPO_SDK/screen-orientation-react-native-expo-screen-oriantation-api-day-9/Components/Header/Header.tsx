import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './HeaderStyles'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import * as ScreenOrientation from 'expo-screen-orientation'
const Header = () => {
    const [headerOrientation, setHeaderOrientation] = useState(2)
    useEffect(() => {
       const unsubscribe = ScreenOrientation.addOrientationChangeListener(event=>{
        console.log(event)
        setHeaderOrientation(event?.orientationLock)
       })
       return ()=> unsubscribe.remove()
    }, [])
    console.log("The header orientation is: ", headerOrientation)
    return (
        <View style={headerOrientation === 0 ? styles.header: headerOrientation === 2 ? styles.header : headerOrientation === 3? styles.header: styles.header2}>
            <TouchableOpacity style={styles.header__camera}>
            <MaterialCommunityIcons name="screen-rotation-lock" size={24} color="lightseagreen" />
            </TouchableOpacity>
            <Text style={styles.header__text}>
                Crisp Orientation
            </Text>
            <TouchableOpacity style={styles.header__share}>
            <AntDesign name="setting" size={24} color="orange" />
            </TouchableOpacity>
        </View>
    )
}

export default Header
