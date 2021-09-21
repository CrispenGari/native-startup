import React, {useEffect, useState} from 'react'
import { View , Text, Image,TouchableOpacity} from 'react-native'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import styles from './MainStyles'
import * as ScreenCapture from 'expo-screen-capture'
const Main =()=>{
    // ScreenCapture.usePreventScreenCapture() this is a hook that disallow screenshots to be taken when this component is mounted on the screen according to the expo-screen-capture docs
    const [allow, setAllow] =useState(false)
    const [message, setMessage] = useState("")
    const changeSecurity = async ()=>{
        if(allow){
            return await ScreenCapture.allowScreenCaptureAsync().then(()=>{
                
                return setAllow(!allow)
            })
        }else{
            return await ScreenCapture.preventScreenCaptureAsync().then(()=>{
                return setAllow(!allow)
            })
        }
    }
    useEffect(()=>{
        const unsubscribe = ScreenCapture.addScreenshotListener(()=>{
            if(!allow){
                setMessage("A screen shot of this screen has been saved in your gallery")
            }else{
                setMessage("Oops!! you can't screenshot this Screen due to Security reasons!")
            }
        })
        return ()=> unsubscribe.remove()
    }, [])
     return(
            <View style={styles.main}>
               <Text style={styles.main__text1}>Screen Capture</Text>
               <View style={styles.main__controls}>
                   {
                       !allow?  
                    <TouchableOpacity style={styles.main__button} onPress={changeSecurity}>
                        <Text style={styles.main__controltext}>Disallow Screen Capture</Text>
                    </TouchableOpacity>
                    :
                     <TouchableOpacity style={styles.main__button}  onPress={changeSecurity}>
                        <Text style={styles.main__controltext}>Allow Screen Capture</Text>
                    </TouchableOpacity>
                   }
               </View>
                <Text style={styles.main__text2}>{message}</Text>
                {
                    allow?<MaterialIcons name="cancel" size={100} color="orange" style={{marginTop: 30}} /> : <Ionicons name="md-checkmark-circle" size={100} color="green" style={{marginTop: 30}}/>
                }
            </View>
        )
}
export default Main
