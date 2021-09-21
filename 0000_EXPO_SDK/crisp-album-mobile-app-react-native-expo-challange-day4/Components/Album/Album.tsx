import React, { useState } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './AlbumStyles'
import {getAllAlbumAssetsAsync} from '../../utils'
const Album = ({Icon, album, setAlbumAssets, setAlbumName}) => {
    const openAlbum = ()=>{
        console.log("The album name is: ", album?.title)
        if(album?.id){
            setAlbumName(album?.title)
            getAllAlbumAssetsAsync(album?.id, album?.assetCount).then(res=>{
                setAlbumAssets(res)
            }).catch(err=>{

            }).finally(()=>{
            })
        }
    }
    return (
        <TouchableOpacity style={styles.album} onPress={openAlbum}>
            <Text style={styles.album__text}>{album?.assetCount} item(s)</Text>
            {Icon}
            <Text style={styles.album__text}>{album?.title}</Text>
        </TouchableOpacity>
    )
}

export default Album
