import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './HeaderStyles'
import { Feather, Entypo } from '@expo/vector-icons';
import {openVideoSync, openShareDialogAsync} from '../../utils'
const Header = ({setVideo, video}) => {
    const choseVideo =()=>{
        openVideoSync().then(result=>{
            if(!result?.cancelled){
                  setVideo(result)
            }
        })
    }
    const openAndShare =()=>{
        openVideoSync().then(res=>{
            if(!res?.cancelled){
                setVideo(res)
                if(res?.uri){
                    openShareDialogAsync(res.uri).then(res=>{}).catch(error=>{
                    }).finally(()=>{
                    })
                }
            }
        })
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.header__camera} onPress={choseVideo}>
                <Feather name="camera" size={24} color="lightseagreen"/>
            </TouchableOpacity>
            <Text style={styles.header__text}>
                Crisp Video Share
            </Text>
            <TouchableOpacity style={styles.header__share} onPress={openAndShare}>
                <Entypo name="share" size={24} color="orange" />
            </TouchableOpacity>
        </View>
    )
}

export default Header
