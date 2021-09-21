import React, { useEffect , useState} from 'react'

import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native'
import {Avatar} from 'react-native-paper'
import styles from './AddContactStyles'
import constants from '../../utils/constants'
import {addToContactsAsync} from '../../utils'
const AddContact = ({setScreen}) => {
    const [name, setName] = useState("");
    const [firstname, setFirstName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [lookupkey, setLookUpKey] = useState("");
    const addContact = ()=>{
        if(name && firstname && phoneNumber){
            const value ={
                FIRST_NAME: firstname,
                NAME: name,
                PHONE_NUMBER: phoneNumber
            }
            addToContactsAsync(value).then(()=>{

            }).catch(error=>{

            }).finally(()=>{
                // setTabTo contact list
                setScreen(constants?.LIST_SCREEN)
            })
        }
    }
    const discard =()=>{
        setName("")
        setFirstName("")
        setPhoneNumber("")
        setScreen(constants.LIST_SCREEN)
    }
    return (
        <View style={styles.addcontact}>
               <Avatar.Text size={150} label={"NW"}  />
               <View style={styles.addcontact__info}>
                <View style={styles.addcontact__list}>
                     <Text style={styles.addcontact__text2}>First Name</Text>
                    <TextInput
                         editable
                         maxLength={40}
                         numberOfLines={1}
                        onChangeText={text => setFirstName(text)}
                        value={firstname}
                        placeholder="Enter some text"
                        style={{borderColor: "lightgray", borderWidth: 1, flex: 1, paddingHorizontal: 5}}
                    />
                </View>
                <View style={styles.addcontact__list}>
                     <Text style={styles.addcontact__text2}>Name</Text>
                    <TextInput
                         editable
                         maxLength={40}
                         numberOfLines={1}
                         onChangeText={text => setName(text)}
                        value={name}
                        placeholder="Enter some text"
                        style={{borderColor: "lightgray", borderWidth: 1, flex: 1, paddingHorizontal: 5}}
                    />
                </View>
                <View style={styles.addcontact__list}>
                     <Text style={styles.addcontact__text2}>PHone Number</Text>
                    <TextInput
                         editable
                         maxLength={40}
                         numberOfLines={1}
                         keyboardType="name-phone-pad"
                         onChangeText={text => setPhoneNumber(text)}
                         value={phoneNumber}
                        placeholder="Enter some text"
                        style={{borderColor: "lightgray", borderWidth: 1, flex: 1, paddingHorizontal: 5}}
                    />
                </View>
                <View style={styles.addcontact__list}>
                     <Text style={styles.addcontact__text2}>Look up key</Text>
                    <TextInput
                         editable={false}
                         maxLength={40}
                         numberOfLines={1}
                         onChangeText={text => setLookUpKey(text)}
                        value={lookupkey}
                        placeholder="Enter some text"
                        style={{borderColor: "lightgray", borderWidth: 1, flex: 1, paddingHorizontal: 5}}
                    />
                </View>
                <View style={styles.addcontact__listbtn}>
                    <View style={styles.addcontact__btn}>
                        <Button onPress={discard} title={"Discard"}/>
                    </View>
                    <View style={styles.addcontact__btn}>
                        <Button disabled={ !(name && firstname && phoneNumber)}onPress={addContact} title={"Save"}/>
                    </View>                   
                </View>
                
            </View>
        </View>
    )
}

export default AddContact
