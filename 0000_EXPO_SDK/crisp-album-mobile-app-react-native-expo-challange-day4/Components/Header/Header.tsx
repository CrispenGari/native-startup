import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './HeaderStyles'
import { AntDesign, Ionicons} from '@expo/vector-icons';
const Header = ({setAlbumAssets, albumAssets, setImage,  albumName}) => {
    const choseImage =()=>{
        setAlbumAssets(null)
        setImage(null)
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.header__camera} onPress={choseImage}>
            {
                !albumAssets?<AntDesign name="picture" size={24} color="orange" /> :<Ionicons name="md-arrow-round-back" size={24} color="orange" />
            }
            </TouchableOpacity>
            <Text style={styles.header__text}>
                {
                     albumName? albumName :  "Crisp Albums"
                }
            </Text>
            <TouchableOpacity style={styles.header__share}>
            <AntDesign name="setting" size={24} color="orange" />
            </TouchableOpacity>
        </View>
    )
}

export default Header
