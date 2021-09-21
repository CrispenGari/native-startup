import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './HeaderStyles'
import { Feather, AntDesign } from '@expo/vector-icons';
const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.header__camera} >
            <Feather name="battery-charging" size={24} color="orange" />
            </TouchableOpacity>
            <Text style={styles.header__text}>
                Crisp Battery Life
            </Text>
            <TouchableOpacity style={styles.header__share} >
                <AntDesign name="setting" size={24} color="orange" />
            </TouchableOpacity>
        </View>
    )
}

export default Header
