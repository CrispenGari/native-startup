import React, { useEffect , useState} from 'react'

import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native'
import {Avatar} from 'react-native-paper'
import styles from './EditContactStyles'
const EditContact = ({selectedContact}) => {
    const [name, setName] = useState("");
    const [firstname, setFirstName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [lookupkey, setLookUpKey] = useState("");

    useEffect(()=>{
        if(selectedContact){
            setFirstName(selectedContact?.firstName)
            setName(selectedContact?.name)
            setLookUpKey(selectedContact?.lookupKey)
            setPhoneNumber(selectedContact?.phoneNumbers[selectedContact?.phoneNumbers?.length -1]?.number)
        }
    }, [selectedContact])
    return (
        <View style={styles.editcontact}>
               <Avatar.Text size={150} label={String(selectedContact?.firstName).charAt(0)}  />
               <View style={styles.editcontact__info}>
                <View style={styles.editcontact__list}>
                     <Text style={styles.editcontact__text2}>First Name</Text>
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
                <View style={styles.editcontact__list}>
                     <Text style={styles.editcontact__text2}>Name</Text>
                    <TextInput
                         editable
                         maxLength={40}
                         numberOfLines={1}
                         onChangeText={text => setName(name)}
                        value={name}
                        placeholder="Enter some text"
                        style={{borderColor: "lightgray", borderWidth: 1, flex: 1, paddingHorizontal: 5}}
                    />
                </View>
                <View style={styles.editcontact__list}>
                     <Text style={styles.editcontact__text2}>PHone Number</Text>
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
                <View style={styles.editcontact__list}>
                     <Text style={styles.editcontact__text2}>Look up key</Text>
                    <TextInput
                         editable
                         maxLength={40}
                         numberOfLines={1}
                         onChangeText={text => setLookUpKey(text)}
                        value={lookupkey}
                        placeholder="Enter some text"
                        style={{borderColor: "lightgray", borderWidth: 1, flex: 1, paddingHorizontal: 5}}
                    />
                </View>
                <View style={styles.editcontact__listbtn}>
                    <View style={styles.editcontact__btn}>
                        <Button onPress={()=>{}} title={"Discard"}/>
                    </View>
                    <View style={styles.editcontact__btn}>
                        <Button onPress={()=>{}} title={"Save"}/>
                    </View>                   
                </View>
                
            </View>
        </View>
    )
}

export default EditContact
