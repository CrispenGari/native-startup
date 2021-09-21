
import {Alert, BackHandler} from 'react-native'
import * as Brightness from 'expo-brightness';
import * as Device from 'expo-device';
const btnAction = () => {
  Alert.alert(
    "Crisp Device Settings",
    "Are you sure you want to exit Crisp Device Settings?",
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
const deviceInfoAsync = async ()=>{
  if(Device.isDevice){
    return {
        DEVICE_BRAND : await Device.brand,
        DEVICE_MANUFACTURER: await Device.manufacturer,
        DEVICE_MODEL_NAME : await Device.modelName,
        DEVICE_MODEL_ID: await Device.modelId, //IOs
        DEVICE_DESIGN_NAME: await Device.designName,
        DEVICE_PRODUCT_NAME: await Device.productName,
        DEVICE_YEAR_CLASS: await Device.deviceYearClass,
        DEVICE_TOTAL_MEMORY: await Device.totalMemory,
        DEVICE_SUPPOTED_ARCHITECTURES: await Device.supportedCpuArchitectures,
        DEVICE_OS_NAME: await Device.osName,
        DEVICE_OS_VERSION: await Device.osVersion,
        DEVICE_OS_BUID_ID: await Device.osBuildId,
        DEVICE_OS_INTENAL_BUID_ID: await Device.osInternalBuildId,
        DEVICE_OS_BUILD_FINGERPRINT : await Device.osBuildFingerprint,
        DEVICE_PLATFORM_API_LEVEL: await Device.platformApiLevel,
        DEVICE_NAME: await Device.deviceName,
        DEVICE_TYPE: await Device.getDeviceTypeAsync(),
        DEVICE_UP_TIME: await Device.getUptimeAsync(),
        DEVICE_MAX_MEMORY: await Device.getMaxMemoryAsync()
    }
  }
}

const getSysBrightnessAsync = async ()=>{
   const permision = await Brightness.requestPermissionsAsync()
   if(permision.granted){
     return{
      SYS_BRIGHTNESS: await Brightness.getSystemBrightnessAsync()
    }
   }
   return null
}
const setAppBrightnessAsync = async (value: Number)=>{
    await Brightness.setBrightnessAsync(value)
    return {APP_BRIGHTNESS: await Brightness.getBrightnessAsync()}
}
const getSystemBrightnessModeAsync= async ()=>{
    return await Brightness.getSystemBrightnessModeAsync()

}
const setSysBrightnessAsync = async (value: Number)=>{
  await Brightness.setSystemBrightnessAsync(value)
  return {SYS_BRIGHTNESS_: await Brightness.getSystemBrightnessAsync()}
}

const restoreSystemBrightnessAsyc = async ()=>{
    return await Brightness.useSystemBrightnessAsync()
}
export {btnAction, deviceInfoAsync, getSysBrightnessAsync, setAppBrightnessAsync, getSystemBrightnessModeAsync, setSysBrightnessAsync, restoreSystemBrightnessAsyc} 