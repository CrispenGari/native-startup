import React, {useEffect, useRef, useState} from 'react'
import { View , Text, Image,TouchableOpacity, Button} from 'react-native'
import { Feather, Entypo } from '@expo/vector-icons';
import {openVideoSync, openShareDialogAsync} from '../../utils'
import { Video } from 'expo-av';
import styles from './MainStyles'
const Main = ({video, setVideo}) => {
    const vidRef = useRef()
    const [volume, setVolume] = useState(0.2)
    const handlePlay = ()=>{
        vidRef.current.playAsync().then(res=>{
            if(res.isPlaying){
                vidRef.current.pauseAsync()
            }else{
                vidRef.current.playAsync()
            }
        })
    }
    const choseVideo =()=>{
        openVideoSync().then(res=>{
            setVideo(res)
        })
    }
    console.log("The image is: ", video)
    const shareVideo =()=>{
        if(video){
            openShareDialogAsync(video?.uri).then(()=>{}).catch(error=>{
                console.log("An error has oocured");
            })
        }
    }
    useEffect(()=>{
        if(video){
            vidRef.current.setVolumeAsync(volume)
        }
    }, [volume, video])
    if(video && video?.uri !== undefined){
        return (
            <View style={styles.main}>
                <Text style ={styles.main__text1}>Selected Video Preview</Text>
                <Text style ={styles.main__text2}>{video?.type}</Text>
                 <View style={styles.main__volume}>
                    <Button title="Volume -" onPress={()=>{
                          if(volume >0){
                              setVolume(volume-.1)
                           }
                          }
                        }/>
                     <Button title="Stop Preview" onPress={()=>{
                         vidRef.current.stopAsync()
                     }}/>
                    <Button title="Volume +" onPress={()=>{
                        if(volume <1){
                            setVolume(volume+.1)
                         }
                    }}/> 
                 </View>
                <TouchableOpacity onPress={handlePlay}>
                    <Video
                        source={{ uri: video?.uri }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        ref={vidRef}
                        style={{ width: 300, height: 300 }}
                        useNativeControls
                        usePoster
                    />
                 </TouchableOpacity>
               <Text style ={styles.main__text2}>{String(video?.uri).split('/')[String(video?.uri).split('/').length -1]}</Text>
                <View style={styles.main__controls}>
                    <TouchableOpacity style={styles.main__open}  onPress={choseVideo}>
                         <Feather name="camera" size={24} color="lightseagreen"/>
                         <Text style={styles.main__controltext}>Choose</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.main__share}  onPress={shareVideo}>
                        <Entypo name="share" size={24} color="orange" />
                        <Text style={styles.main__controltext}>Share</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        )
    }else{
        return(
            <View style={styles.main}>
                <Text style ={styles.main__text1}>Selected an Video  to share</Text>
                  <Image style={{width: 100, height: 100, marginVertical: 150}} source={{uri: "https://i.gifer.com/ZZ5H.gif"}}/>
                  <View style={styles.main__controls}>
                    <TouchableOpacity style={styles.main__open}  onPress={choseVideo}>
                         <Feather name="camera" size={24} color="lightseagreen"/>
                         <Text style={styles.main__controltext}>Choose</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.main__share} disabled={video?.uri === undefined}  onPress={shareVideo}>
                        <Entypo name="share" size={24} color="orange" />
                        <Text style={styles.main__controltext}>Share</Text>
                    </TouchableOpacity>
                </View> 
            </View>
        )
        
    }
    
}
export default Main
