import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './HeaderStyles'
import constants from '../../utils/constants'
import {MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
const Header = ({setScreen, screen, selectedContact}) => {
    const goBack =()=>{
        setScreen(constants?.LIST_SCREEN)
        
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.header__camera} onPress={goBack}>
           {
               constants.LIST_SCREEN === screen ?          <AntDesign name="contacts" size={24} color="lightseagreen" />:
               <MaterialCommunityIcons name="keyboard-backspace" size={24} color="orange" />
           }
     
            </TouchableOpacity>
            <Text style={styles.header__text}>
                {
                    constants.LIST_SCREEN === screen ? "Crisp Contacts":
                    constants.EDIT_SCREEN === screen?
                    selectedContact?.name || selectedContact?.firstName:
                    "Create New Contact"
                }
            </Text>
            <TouchableOpacity style={styles.header__share}>
              <AntDesign name="setting" size={24} color="orange" />
            </TouchableOpacity>
        </View>
    )
}

export default Header
