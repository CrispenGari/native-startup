import React, { useEffect, useState } from 'react'
import { View, Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {Battery,batteryAvailabilityAsync, batteryStateAsync} from '../../utils'
import styles from './MainStyles'
const Main = () => {
        const [battery, setBattery]= useState(null)
        useEffect(()=>{
            const unsubscribe = Battery.addBatteryStateListener(()=>{
                batteryAvailabilityAsync().then(res=>{
                    if(res){
                        batteryStateAsync().then(res=>{
                            setBattery(res)
                        })
                    }
                })
            })
            return ()=>{
                unsubscribe.remove()
            }
        },[])
        return (
            <View style={styles.main}>
               <Text style={styles.main__text1}>Battery status</Text>
               <Ionicons name="ios-battery-full" size={74} color="lightseagreen" />
               <Text style={styles.main__text1}>{Number.parseInt(battery?.batteryLevel * 100)} %</Text>
              {
                battery?.lowPowerMode ?
                <Text style={styles.main__text4}>The battery is low plug in the socket</Text>
                :<Text style={styles.main__text3}>The battery is still having life keep on using your phone</Text>
              }
            </View>
        )
}
export default Main
