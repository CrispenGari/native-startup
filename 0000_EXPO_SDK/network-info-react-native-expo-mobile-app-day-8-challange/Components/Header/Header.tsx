import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './HeaderStyles'
import { Feather, AntDesign } from '@expo/vector-icons';
const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.header__camera}>
                <Feather name="wifi" size={24} color="lightseagreen" />
            </TouchableOpacity>
            <Text style={styles.header__text}>
                Crisp Network
            </Text>
            <TouchableOpacity style={styles.header__share} >
                <AntDesign name="setting" size={24} color="orange" />
            </TouchableOpacity>
        </View>
    )
}

export default Header
