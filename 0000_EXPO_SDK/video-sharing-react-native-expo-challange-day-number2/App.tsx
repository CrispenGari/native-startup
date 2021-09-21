import React, {useState} from 'react';
import {  View , BackHandler, Alert} from 'react-native';
import  styles from './AppStyles'
import {Main, Header} from './Components'
export default function App() {
  console.disableYellowBox = true;
  React.useEffect(() => {
    const btnAction = () => {
      Alert.alert(
        "Crisp Video Share",
        "Are you sure you want to exit Crisp Video Share?",
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
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      btnAction
    );
    return () => {
      backHandler.remove();
    };
  }, []);
  const [video, setVideo] = useState(null)
  return (
    <View style={styles.container}>
     <Header setVideo={setVideo} video={video} />
     <Main video={video} setVideo={setVideo} />
    </View>
  );
}

