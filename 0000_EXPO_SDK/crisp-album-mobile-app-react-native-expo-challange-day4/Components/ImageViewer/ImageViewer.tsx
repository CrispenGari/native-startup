import React, { useState } from 'react'
import { View , Text, Image, TouchableOpacity} from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'; 
import styles from './ImageViewerSyles'
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import {openShareDialogAsync} from '../../utils'
const ImageViewer = ({albumAssets, image}) => {
    const [src, setSrc] = useState(image[0]?.uri)
    const [index, setIndex] = useState(image[1])
    const [slide, setSlide] = useState(false)
    const [shareControls, setShareControls] = useState(false)
    const nextImage=()=>{
        setIndex(index+1)
        setSrc(albumAssets?.assets[index].uri)
    }
    const prevImage=()=>{
        setIndex(index-1)
        setSrc(albumAssets?.assets[index].uri)
    }
    const slideShow = ()=>{
        if(!slide){
            setInterval(()=>{
                if(index === albumAssets?.assets.length-1){
                    setIndex(0)
                    setSrc(albumAssets?.assets[index].uri)
                }else{
                    setIndex(index+1)
                    setSrc(albumAssets?.assets[index].uri)
                }
            }, 1000)
            setSlide(!true)
        }else{
            setSlide(!false)
        }
    }
    const openShareControls =()=>{
        setShareControls(true)
        setTimeout(()=>{
            setShareControls(false)
        }, 4000)
    }
    const shareImage =()=>{
        if(src){
            openShareDialogAsync(src).then(res=>{
                // 
            }).catch(error=>{
                // 
            }).finally(()=>{
                // 
            })
        }
    }
    return (
        <View style ={styles.imageviewer}>
            <View style ={styles.imageviewer__top}>
                <View>
                     <Text style={styles.imageviewer__text1}>{`${index+1}/${albumAssets?.assets.length}`}</Text>
                </View>
                <TouchableOpacity onPress={openShareControls} >
                    <MaterialIcons name="more-vert" size={24} color="orange" />
                </TouchableOpacity> 
            </View>
            {
                shareControls &&
           
            <View style={styles.imageviewer__shareControls}>
                <TouchableOpacity style={styles.imageviewer__sharecontrol} onPress={shareImage}>
                    <EvilIcons name="share-google" size={24} color="orange" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageviewer__sharecontrol}>
                    <Ionicons name="ios-heart-empty" size={24} color="lightseagreen" />
                </TouchableOpacity >
                <TouchableOpacity style={styles.imageviewer__sharecontrol}>
                    <Ionicons name="ios-heart-dislike" size={24} color="orangered" />
                </TouchableOpacity>
            </View>
             }
               <Image style={styles.imageviewer__image} source={{uri: src}}/> 
   
            <View style={styles.imageviewer__controls}>
                <TouchableOpacity onPress={prevImage} style={styles.imageviewer__control} disabled={index===0}>
                   <AntDesign name="caretleft" size={24} color="orange" />
                </TouchableOpacity>
                <TouchableOpacity onPress={slideShow}style={styles.imageviewer__control}>
                    <MaterialIcons name="slideshow" size={24} color="lightseagreen" />
                </TouchableOpacity>
                <TouchableOpacity onPress={nextImage} style={styles.imageviewer__control} disabled={index===albumAssets?.assets.length-1}>
                    <AntDesign name="caretright" size={24} color="orange" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ImageViewer
