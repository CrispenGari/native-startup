
import { Alert, BackHandler} from 'react-native'
import * as Network from 'expo-network'
const btnAction = () => {
      Alert.alert(
        "Crisp Network",
        "Are you sure you want to exit Crisp Network?",
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

const getNetworkAsync = async ()=>{
      return {
          NETWORK_STATE: await Network.getNetworkStateAsync(),
          AIRPLANE_MODE:  await Network.isAirplaneModeEnabledAsync(),
          NETWORK_TYPE:  await Network.NetworkStateType,
          // NETWORK_IP_ADDRESS: await Network.getIpAddressAsync() || null
      }
  }

export {btnAction, getNetworkAsync} 