import React, {useEffect, useState} from 'react'
import { View , Text, Image,TouchableOpacity, ScrollView, Button} from 'react-native'
import { Feather, Entypo, MaterialIcons } from '@expo/vector-icons';
import styles from './MainStyles'
import {deviceInfoAsync,restoreSystemBrightnessAsyc, setSysBrightnessAsync,setAppBrightnessAsync, getSysBrightnessAsync} from '../../utils'
import {ProgressBar } from 'react-native-paper';
const Main = () => {
    const [device, setDevice] = useState(null)
    const [appBrightness, setAppBrightness] = useState(0)
    const [sysBrightness, setSysBrightness] = useState(0)
    useEffect(()=>{
        deviceInfoAsync().then(res=>{
            setDevice(res)
        }).catch(error=>{

        }).finally(()=>{

        })
        getSysBrightnessAsync().then(res=>{
            setAppBrightness(res?.SYS_BRIGHTNESS)
            setSysBrightness(res?.SYS_BRIGHTNESS)
        })
    },[])
    const reduceAppBrightness =()=>{
        if(appBrightness>.1){
            setAppBrightness(appBrightness-.1)
            setAppBrightnessAsync(appBrightness).then(res=>{
                console.log(res.APP_BRIGHTNESS)
            })
        }
    
    }
    const increaseAppBrightness =()=>{
        if(appBrightness <1){
            setAppBrightness(appBrightness+.1)
            setAppBrightnessAsync(appBrightness).then(res=>{
                console.log(res.APP_BRIGHTNESS)
            })
        }
    }
    const reduceSystemBrightness =()=>{
        if(appBrightness >.1){
            setSysBrightness(sysBrightness-.1)
            setSysBrightnessAsync(sysBrightness).then(res=>{
                console.log(res.SYS_BRIGHTNESS_)
            })
        }
    }
    const increaseSystemBrightness =()=>{
        if(appBrightness <1){
            setSysBrightness(sysBrightness+.1)
            setSysBrightnessAsync(sysBrightness).then(res=>{
                console.log(res.SYS_BRIGHTNESS_)
            })
        }
    }
    const restoreBrightness= ()=>{
            restoreSystemBrightnessAsyc().then(res=>{

            }).catch(error=>{

            }).finally(()=>{})
    }
        return(
            <ScrollView style={styles.main}>
               <View style={styles.main__systemInfo}>
                    <View style={styles.main__header}>
                        <Text style={styles.main__text1}>System Infomation</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE BRAND</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_BRAND}</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE MODEL NAME</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_MODEL_NAME}</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE DESIGN NAME</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_DESIGN_NAME}</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE MANUFACTURER</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_MANUFACTURER}</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE OS BUID ID</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_OS_BUID_ID}</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE OS INTENAL BUID ID</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_OS_INTENAL_BUID_ID}</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE OS VERSION</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_OS_VERSION}</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE NAME</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_NAME}</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE PLATFORM API LEVEL</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_PLATFORM_API_LEVEL}</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE PRODUCT NAME</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_PRODUCT_NAME}</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE TOTAL MEMORY</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_TOTAL_MEMORY}</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE TYPE</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_TYPE}</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE UP TIME</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_UP_TIME}</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE YEAR CLASS</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_YEAR_CLASS}</Text>
                    </View>
                    <View style={styles.main__list}>
                        <Text style={styles.main__text3}>DEVICE SUPPOTED ARCHITECTURES</Text>
                        <Text style={styles.main__text4}>{device?.DEVICE_SUPPOTED_ARCHITECTURES.map(ele=> ele+ ", ")}</Text>
                    </View>
               </View>
               <View style={styles.main__brightness}>
                    <View style={styles.main__header}>
                        <Text style={styles.main__text1}>Brightness</Text>
                    </View>
                    <Text style={styles.main__text2}>App Brightness</Text>
                    <View style={styles.main__list}>
                        <TouchableOpacity disabled ={appBrightness<=0.1} onPress={reduceAppBrightness} style={styles.main__brightnessControls}>
                            <MaterialIcons name="brightness-5" size={24} color="lightblue" />
                        </TouchableOpacity>
                        <ProgressBar progress={appBrightness} color={appBrightness>=.75? "orangered":appBrightness>=.5?"orange": "lightblue" } style={styles.main__progress}/>
                        <TouchableOpacity disabled ={appBrightness>=1}onPress={increaseAppBrightness}  style={styles.main__brightnessControls}>
                        <MaterialIcons name="brightness-6" size={24} color="orangered" />
                        </TouchableOpacity >
                    </View>
                    <Text style={styles.main__text2}>System Brightness</Text>
                    <View style={styles.main__list}>
                        <TouchableOpacity disabled ={sysBrightness<=0.1} onPress={reduceSystemBrightness} style={styles.main__brightnessControls}>
                            <MaterialIcons name="brightness-5" size={24} color="lightblue" />
                        </TouchableOpacity>
                        <ProgressBar progress={sysBrightness} color={sysBrightness>=.75? "orangered":sysBrightness>=.5?"orange": "lightblue" } style={styles.main__progress}/>
                        <TouchableOpacity disabled ={sysBrightness>=1}onPress={increaseSystemBrightness}  style={styles.main__brightnessControls}>
                        <MaterialIcons name="brightness-6" size={24} color="orangered" />
                        </TouchableOpacity >
                    </View>
                    <TouchableOpacity style={styles.main__restore} onPress={restoreBrightness} >
                            <Text style={styles.main__text1}>Restore</Text>
                    </TouchableOpacity>
               </View>
            </ScrollView>
        )
}
export default Main
