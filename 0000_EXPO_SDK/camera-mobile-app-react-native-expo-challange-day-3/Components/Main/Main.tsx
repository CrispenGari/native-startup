import React, {useRef} from 'react'
import { View , Text, Image,TouchableOpacity, Dimensions} from 'react-native'
import { Feather,MaterialIcons, EvilIcons, Entypo } from '@expo/vector-icons';
import {openCameraSync, openShareDialogAsync} from '../../utils'
import styles from './MainStyles'
import constants from '../../utils/constants'
import { Video } from 'expo-av';
const Main = ({media, setMedia}) => {
    const vidRef = useRef()
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
    const stopPreview =()=>{
        vidRef.current.pauseAsync()
    }
    const shareMedia = ()=>{
        if(media?.uri){
            openShareDialogAsync(media?.uri).then(res=>{
                console.log(res)
            }).catch(error=>{
                console.log(error)
            }).finally(()=>{return})
        }
    }
    console.log("Media: ", media)
       if(media && media?.cancelled === false){
        return (
            <View style={styles.main}>
                <Text style={styles.main__text2}>{media?.type + " preview" }</Text>
               {
                   media?.type === "video"? 
                <Video
                   source={{ uri: media?.uri }}
                   rate={1.0}
                   volume={1.0}
                   isMuted={false}
                   resizeMode="cover"
                   shouldPlay
                   ref={vidRef}
                   isLooping={!false}
                   style={styles.main__video}
                   useNativeControls
                   posterSource
                 />:<Image source={{uri: media?.uri}} style={styles.main__image}/>
               }
               {
                 media?.type !== "video"? 
                 <TouchableOpacity style={styles.main__share} onPress={shareMedia}>
                 <EvilIcons name="share-google" size={24} color="orange" />
                 <Text style={styles.main__text1}>Share</Text>
                 </TouchableOpacity>
             : 
             <View style={styles.main__vidcontrols}>
             <TouchableOpacity style={styles.main__share} onPress={stopPreview}>
                  <Entypo name="controller-stop" size={24} color="orange" />
                <Text style={styles.main__text1}>stop preview</Text>
             </TouchableOpacity> 
             <TouchableOpacity style={styles.main__share} onPress={shareMedia}>
                 <EvilIcons name="share-google" size={24} color="orange" />
                <Text style={styles.main__text1}>Share</Text>
             </TouchableOpacity> 
            </View>
               }
            </View>
        )
       }else{
        return (
            <View style={styles.main}>
                <TouchableOpacity style={styles.main__open} onPress={openPhotoCamera} >
                        <Feather name="camera" size={50} color="lightseagreen"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.main__open} onPress={openVideoCamera} >
                        <MaterialIcons name="video-call" size={50} color="orangered" />
                    </TouchableOpacity>
                  <Text style={styles.main__instruction}>Click the camera icon to take a picture or a video</Text>
            </View>
           )
       }
}
export default Main
