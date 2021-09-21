import React, {useEffect, useState} from 'react'
import { View , Text, Image,TouchableOpacity} from 'react-native'
import { Feather, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './MainStyles'
import {getNetworkAsync} from '../../utils'
import { ActivityIndicator } from 'react-native-paper';
const Main = () => {
    const [network, setNetwork] = useState(null)
    const [error, setError] = useState("")
 useEffect(()=>{
        getNetworkAsync().then(res=>{
            setNetwork(res)
        }).catch(error=>{
            setError(error)
        }).finally(()=>{

        })
    },[])
    if(network){
    return (
            <View style={styles.main}>
              <View style={styles.main__top}>
                  <Text style ={styles.main__text1}>Connection Status</Text>
                  <View style={styles.main__list}>
                    <Text style={styles.main__text2}>AIRPLANE MODE</Text>
                    {!network?.AIRPLANE_MODE?
                    <MaterialIcons name="airplanemode-inactive" size={24} color="yellow" />
                    :<MaterialIcons name="airplanemode-active" size={24} color="orangered" />
                    }
                  </View>
                  <View style={styles.main__list}>
                    <Text style={styles.main__text2}>Connected</Text>
                    {
                        network?.NETWORK_STATE?.isConnected?
                        <MaterialCommunityIcons name="network-strength-4" size={24} color="green" />
                        :<MaterialCommunityIcons name="network-strength-off" size={24} color="red" />
                    }

                  </View>
                  <View style={styles.main__list}>
                    <Text style={styles.main__text2}>Internet access</Text>
                    {
                        network?.NETWORK_STATE?.isInternetReachable?
                        <Feather name="wifi" size={24} color="blue" />
                        :<Feather name="wifi" size={24} color="red" />
                    }
                  </View>
                  <View style={styles.main__list}>
                    <Text style={styles.main__text2}>Connection Type</Text>
                    <Text style={styles.main__text3}>{network?.NETWORK_STATE?.type}</Text>
                  </View>
              </View>
              <View style={styles.main__bottom}>
                <Text style ={styles.main__text1}>Supported Networks</Text>
                {
                    Object.keys(network?.NETWORK_TYPE).sort().map((networktype, id)=>{
                        
                        return  <View style={styles.main__list}>
                        <Text style={styles.main__text2}>{networktype}</Text>
                        <Ionicons name="ios-checkmark-circle" size={24} color="green" />
                    </View>
                    })
                }
               
              </View>
            </View>
        )}else{
          return (
            <View style={styles.main__loading}>
                <ActivityIndicator animating={true} style={{margin:50}} size={50} hidesWhenStopped color={"lightseagreen"} />
                <Text style={styles.main__text4}>Loading...</Text>
            </View>
          )
      }
}
export default Main
