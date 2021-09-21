import React from 'react'
import { View , Text, Image,TouchableOpacity} from 'react-native'
import { Feather, Entypo } from '@expo/vector-icons';
import {changeScreenLockOrientationAsync, getCurrentOrientationAsync} from '../../utils'
import constants from '../../utils/constants'
import styles from './MainStyles'
const Main = ({orientation, setOrientation}) => {
    const handleChangeOrientation = async (value)=>{
        if(value){
            await changeScreenLockOrientationAsync(value).then(()=>{
            })
        }
       await getCurrentOrientationAsync().then(result=>{
            setOrientation(result)
          })
     return
    }
        return(
            <View style={styles.main}>
                <Text style={styles.main__text2}>Device Orientation Adjustment</Text>
                <View style={styles.main__list}>
                    <TouchableOpacity style={styles.main__button} onPress={()=>handleChangeOrientation(constants.LOCK_POTRAIT)}>
                        <Text style={styles.main__text1}>Potrait</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.main__button} onPress={()=>handleChangeOrientation(constants.LOCK_LANDSCAPE)}>
                        <Text style={styles.main__text2}>Landscape</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.main__list}>
                    <TouchableOpacity style={styles.main__button} onPress={()=>handleChangeOrientation(constants.LOCK_DEFAULT)}>
                        <Text style={styles.main__text1}>Default</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.main__button} onPress={()=>handleChangeOrientation(constants.LOCK_ALL)}>
                        <Text style={styles.main__text1}>All</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.main__list}>
                    <TouchableOpacity style={styles.main__button} onPress={()=>handleChangeOrientation(constants.LOCK_POTRAIT_UP)}>
                        <Text style={styles.main__text1}>Potrait Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.main__button} onPress={()=>handleChangeOrientation(constants.LOCK_LANDSCAPE_RIGHT)}>
                        <Text style={styles.main__text1}>Landscape Right</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.main__list}>
                    <TouchableOpacity style={styles.main__button} onPress={()=>handleChangeOrientation(constants.LOCK_POTRAIT_DOWN)}>
                        <Text style={styles.main__text1}>Potrait Down</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.main__button} onPress={()=>handleChangeOrientation(constants.LOCK_LANDSCAPE_LEFT)}>
                        <Text style={styles.main__text1}>Landscape Left</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.main__list}>
                    <TouchableOpacity style={styles.main__button} onPress={()=>handleChangeOrientation(constants.LOCK_UNKNOWN)}>
                        <Text style={styles.main__text1}>Unknown</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.main__button} onPress={()=>handleChangeOrientation(constants.LOCK_OTHER)}>
                        <Text style={styles.main__text2}>Other</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
}
export default Main
