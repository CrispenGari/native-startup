import {BackHandler, Alert} from 'react-native'
import * as Battery from 'expo-battery';
const btnAction = () => {
  Alert.alert(
    "Crisp Battery Life",
    "Are you sure you want to exit Crisp Battery Life?",
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
const batteryLevelAsync = async ()=>{
  const battery = await Battery.getBatteryLevelAsync()
  return battery
}
const batteryAvailabilityAsync = async ()=>{
    return await Battery.isAvailableAsync()
}
const batteryStateAsync = async ()=>{
  return await Battery.getPowerStateAsync();
}

const batteryLowPowerModeStatusAsync = async ()=>{
  return await Battery.isLowPowerModeEnabledAsync()
}
const powerStateAsync= async ()=>{
  return await Battery.getPowerStateAsync()
}
export {btnAction,batteryStateAsync, batteryLevelAsync, batteryAvailabilityAsync, powerStateAsync, batteryLowPowerModeStatusAsync, Battery} 