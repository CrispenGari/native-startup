import React, {useState } from 'react'
import { View , Text, Image,TouchableOpacity, ScrollView} from 'react-native'
import {AntDesign, MaterialIcons } from '@expo/vector-icons';
import styles from './MainStyles'
import {ContactCard, AddContact, EditContact} from '../../Components'
import constants from '../../utils/constants'
import {deleteContactAsync, confirmAction} from '../../utils'
const Main = ({setScreen, setSelectedContact, selectedContact, screen, contacts, setContacts}) => {
    const [showMenu, setShowMenu] = useState(false)
    const deleteContact =()=>{
        if(selectedContact){
            deleteContactAsync(selectedContact?.id).then(()=>{})
        }
        return
    }
    const editContact =()=>{
            if(selectedContact){
                setSelectedContact(selectedContact)
                setScreen(constants.EDIT_SCREEN)
                return
            }
        return
    }
    const deleteAction =()=>{
        if(selectedContact){
            confirmAction(deleteContact, selectedContact)
        }
    }
    switch (screen) {
        case constants.ADD_SCREEN:
            return(
                <View style={styles.main}>
                   <AddContact setScreen={setScreen} />
                </View>
            )
        case constants.EDIT_SCREEN:
            return(
                <View style={styles.main}>
                   <EditContact selectedContact={selectedContact}/>
                </View>
            )
        default:
            return(
                <ScrollView style={styles.main}>
                    {
                        showMenu && <View style={styles.main__menu}>
                            <TouchableOpacity onPress={editContact} style={styles.main__menu__button}>
                            <AntDesign name="edit" size={24} color="lightseagreen" />
                            <Text style={styles.main__text4}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={deleteAction} style={styles.main__menu__button}>
                            <MaterialIcons name="delete" size={24} color="orangered" />
                           <Text  style={styles.main__text4}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    
                    {
                        contacts?.map((contact, index)=> <ContactCard setShowMenu ={setShowMenu} setSelectedContact={setSelectedContact} setScreen={setScreen} index ={index}key={contact?.id} contact={contact}/>)
                    }
                </ScrollView>
            )
    }
       
}
export default Main
