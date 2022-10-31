import AsyncStorage from "@react-native-async-storage/async-storage";

type Response = {
  error: boolean;
  message: string;
  data?: any;
};

export const setData = async (key: string, value: any): Promise<Response> => {
  try {
    // if value is an object we should store it as a json string
    const data = typeof value === "object" ? JSON.stringify(value) : value;
    await AsyncStorage.setItem(key, data);
    return {
      error: false,
      message: "Saved " + key + " to the storage.",
    };
  } catch (error: any) {
    return {
      error: true,
      message: `an error occured: ${error.message}`,
    };
  }
};

export const getData = async (key: string): Promise<Response> => {
  try {
    const data = await AsyncStorage.getItem(key);
    return {
      error: false,
      message: "Data retrieved of key " + key + " from the storage.",
      data: !data ? null : JSON.parse(data),
    };
  } catch (error: any) {
    return {
      error: true,
      message: `an error occured: ${error.message}`,
      data: null,
    };
  }
};

export const deleteData = async (key: string): Promise<Response> => {
  try {
    await AsyncStorage.removeItem(key);
    return {
      error: false,
      message: "Deleted data of key " + key + " from the storage.",
    };
  } catch (error: any) {
    return {
      error: true,
      message: `an error occured: ${error.message}`,
    };
  }
};
