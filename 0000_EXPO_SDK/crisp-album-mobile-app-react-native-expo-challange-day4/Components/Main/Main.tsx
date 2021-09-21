import React, { useEffect, useState } from 'react'
import { View , Text, TouchableOpacity, ScrollView} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {openImagePickerSync, openShareDialogAsync, getAllAlbumsAsync} from '../../utils'
import styles from './MainStyles'
import {Album, ImageCard, ImageViewer} from '../../Components'
const Main = ({albumAssets, setAlbumAssets, albumName, setAlbumName, image, setImage}) => {
    const [albums, setAlbums] = useState([])
    useEffect(()=>{
        (async()=>getAllAlbumsAsync().then(res=>{
            setAlbums(res)
        }).catch(error=>{

        }).finally(()=>{

        }))();
    }, [])
    if(albumAssets && image){
        return(
            <View>
                <ImageViewer image={image} albumAssets={albumAssets} />
            </View>
        )
    }
    else if(albumAssets && !image){
        return(
            <ScrollView style={styles.main}>
            <Text style={styles.main__text3}>{albumName}</Text>
            <View style={styles.main__row}>
               {
                   albumAssets?.assets.map((asset, index)=><ImageCard index={index} setImage={setImage} key={index} asset={asset}/> )
               } 
            </View>
            </ScrollView>
        )
    }else{
        return(
            <ScrollView style={styles.main}>
                <Text style={styles.main__text3}>All Albums</Text>
                <View style={styles.main__row}>
                {
                 albums.map((album, index)=>
                     <Album setAlbumName={setAlbumName} setAlbumAssets={setAlbumAssets} key ={index} Icon={<MaterialCommunityIcons name="folder-multiple-image" size={80} color="orange" key ={index} />} album={album}/>
                 )
                }
               </View>
            </ScrollView>
        )
     }
}
export default Main
