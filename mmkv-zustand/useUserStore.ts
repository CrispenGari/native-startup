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
export const useUserStore = create<T>()(
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
