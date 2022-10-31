### Async Storage React Native

In this example we are going to look at how we can store data on our mobile application so that it can be accessed offline using the [async-storage](https://react-native-async-storage.github.io/async-storage/docs/install/) a key to value pair storage system for mobile apps.

### Advantages of Async Storage

It supports all platforms.

### Installation

First you need to install the package by running the following command:

```shell
expo install @react-native-async-storage/async-storage
```

If you are using typescript as your programing language you may need to install the declarative types by running the following command:

```shell
yarn add -D @types/react-native-sqlite-storage
```

### Usage

`async-storage` stores data in a key and value pair. In the following example we are going to show how we can store the data using `async-storage`. We are going to create two functions `getData`, `setData` and `deleteData` for getting, setting and deleting data from `async-storage` in the `utils/index.ts` file which will look as follows:

```ts
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
```

There are a lot of functions from the `Async Storage` such as `clear`, `multiGet`, `multiSet`, `getAllKeys` etc that can be found in the [API references](https://react-native-async-storage.github.io/async-storage/docs/api).

### Example

Look at the code in the files for examples based on a todo application.

### Disadvantages of using Async Storage

This way of storing data is not secured and we will not recommend it for storing sensitive data like `tokens` and `keys`. If your data need to be protected consider using [react-native-encrypted-storage](https://github.com/emeraldsanto/react-native-encrypted-storage)

### References

1. [React Native Docs](https://reactnative.dev/docs/asyncstorage)
2. [react-native-async-storage](https://react-native-async-storage.github.io/async-storage/docs/usage)
