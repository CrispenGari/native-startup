import React, {useState, useEffect} from 'react';
import {  View , BackHandler, Alert, Button} from 'react-native';
import  styles from './AppStyles'
import {btnAction} from './utils'
import {Main, Header} from './Components'
import constants from './utils/constants';
import {getContactListAsync} from './utils'
export default function App() {  
  console.disableYellowBox = true;
  const [screen,setScreen] = useState(constants.LIST_SCREEN)
  const [selectedContact, setSelectedContact] = useState(null)
    const [contacts, setContacts] = useState(null)
    useEffect(()=>{
        getContactListAsync().then(res=>{
            setContacts(res?.CONTACTS_LIST.data)
        })
    }, [])

    useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      btnAction
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  const addContactHandler =async ()=>{
      setScreen(constants?.ADD_SCREEN)
  }
  return (
    <View style={styles.container}>
     <Header selectedContact={selectedContact} setScreen={setScreen} screen={screen} />
     <Main contacts={contacts} setContacts={setContacts} setSelectedContact={setSelectedContact} selectedContact={selectedContact} setScreen={setScreen} screen={screen}/>
    
    {
      constants.LIST_SCREEN === screen && <Button onPress={addContactHandler} title="Add Contact"/>
    }
    </View>
  );
}

