import * as Contacts from "expo-contacts";
import {Alert, BackHandler} from 'react-native'
const btnAction = () => {
  Alert.alert(
    "Crisp Contacts",
    "Are you sure you want to exit Crisp Contacts?",
    [{
        text: "cancel",
        onPress: () => null,
        style: "cancel",
      }, {
        text: "yes",
        onPress: () => BackHandler.exitApp(),
        style: "destructive",
      },
  
    ],{
      cancelable: !true
    }
  );
  return true;
};
const confirmAction = (deleteHandler, selectedContact) => {
  Alert.alert(
    "Crisp Contacts",
    `Are you sure you want to delete ${selectedContact?.name} forever?`,
    [{
        text: "cancel",
        onPress: () => null,
        style: "cancel",
      }, {
        text: "yes",
        onPress: () => deleteHandler(),
        style: "destructive",
      },
    ],{
      cancelable: !true
    }
  );
  return true;
};
const getContactListAsync = async()=>{
  if(await Contacts.isAvailableAsync()){
    const permision =await Contacts.getPermissionsAsync()
    if(!permision.granted){
      const request_permition = await Contacts.requestPermissionsAsync()
      console.log(request_permition)
    }else{
        const contacts = await Contacts.getContactsAsync({
          sort:Contacts.SortTypes.FirstName,
          fields: [Contacts.EMAILS, Contacts.PHONE_NUMBERS, Contacts.PHONETIC_FIRST_NAME, Contacts.PHONETIC_LAST_NAME, Contacts.PHONETIC_MIDDLE_NAME, Contacts.BIRTHDAY, Contacts.ADDRESSES, Contacts.DATES, Contacts.IMAGE, Contacts.IM_ADDRESSES,Contacts.RAW_IMAGE]
        })
        return {CONTACTS_LIST: contacts}
    }
  }
}
const addToContactsAsync =async (value)=>{
    if(Object.keys(value).length !==0){
      console.log(value)
    //  await Contacts.addContactAsync({})

    }
}
const updateContactAsync = async (value)=>{
  return
}
const deleteContactAsync = async (value)=>{
    return await Contacts.removeContactAsync(value.CONTACT_ID)
}
export {btnAction,confirmAction, getContactListAsync, addToContactsAsync, updateContactAsync, deleteContactAsync} 