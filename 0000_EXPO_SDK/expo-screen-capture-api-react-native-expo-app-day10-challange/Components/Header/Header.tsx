import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './HeaderStyles'
import { MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

const Header = () => {

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.header__camera} >
            <MaterialCommunityIcons name="cellphone-screenshot" size={24} color="lightseagreen" />
            </TouchableOpacity>
            <Text style={styles.header__text}>
                Crisp Screen Capture
            </Text>
            <TouchableOpacity style={styles.header__share}>
            <AntDesign name="setting" size={24} color="orange" />
            </TouchableOpacity>
        </View>
    )
}

export default Header
