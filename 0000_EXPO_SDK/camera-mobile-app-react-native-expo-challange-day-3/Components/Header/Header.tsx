import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './HeaderStyles'
import { Feather, MaterialIcons} from '@expo/vector-icons';
import {openCameraSync} from '../../utils'
import constants from '../../utils/constants'
const Header = ({setMedia}) => {
    const openPhotoCamera =()=>{
        openCameraSync(constants.PHOTO_CAMERA).then(res=>{
            setMedia(res)
        }).catch(error=>{
            console.log(error)
        }).finally(()=>{
            return
        })
    }
    const openVideoCamera =()=>{
        openCameraSync(constants.VIDEO_CAMERA).then(res=>{
            setMedia(res)
        }).catch(error=>{
            console.log(error)
        }).finally(()=>{
            return
        })
    }
    return (
        <View style={styles.header}>
            <View style={styles.header__cameras}>
            <TouchableOpacity style={styles.header__camera1} onPress={openPhotoCamera}>
                <Feather name="camera" size={24} color="lightseagreen"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.header__camera2} onPress={openVideoCamera} >
                <MaterialIcons name="video-call" size={36} color="orangered" />
            </TouchableOpacity>
            </View>
         
            <Text style={styles.header__text}>
                Crisp Camera
            </Text>
            <TouchableOpacity style={styles.header__share} >
                <Feather name="settings" size={24} color="orange" />
            </TouchableOpacity>
        </View>
    )
}

export default Header
