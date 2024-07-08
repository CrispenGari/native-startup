### MMKV and Zustand

In this readme file we are going to use [`mmkv`](https://github.com/mrousavy/react-native-mmkv/tree/main) storage with [`zustand`](https://github.com/pmndrs/zustand) to persist data.

First we need to install the packages as follow:

```shell
yarn add react-native-mmkv zustand
```

Example:

```tsx
import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StateStorage, persist, createJSONStorage } from "zustand/middleware";
import { MMKV } from "react-native-mmkv";
import { create } from "zustand";
const storage = new MMKV();
const zustandStorage: StateStorage = {
  setItem: (key, value) => {
    return storage.set(key, value);
  },
  getItem: (key) => {
    const value = storage.getString(key);
    return value ?? null;
  },
  removeItem: (key) => {
    return storage.delete(key);
  },
};

interface T {
  user: { id: number; name: string } | null;
  login: (user: { id: number; name: string }) => void;
  logout: () => void;
}
const useUserStore = create<T>()(
  persist(
    (set, get) => ({
      user: null,
      login: (user) => {
        set((state) => ({ ...state, user }));
      },
      logout: () => {
        set((state) => ({
          ...state,
          user: null,
        }));
      },
    }),
    {
      name: "user",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

const Menu = () => {
  const { login, logout, user } = useUserStore();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{JSON.stringify({ user }, null, 2)}</Text>

      <Button title="Login" onPress={() => login({ id: 1, name: "me" })} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default Menu;
```

Then run:

```shell
npx expo prebuild
# the

npx expo run:android|ios
```
