import { useRouter } from "expo-router";
import React from "react";
import { AppState } from "react-native";
// import { MMKV } from "react-native-mmkv";

// const storage = new MMKV({
//   id: "lock-timer",
// });

export const UserInactivityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const appState = React.useRef(AppState.currentState);
  const router = useRouter();
  const isSignedIn = true;

  React.useEffect(() => {
    router.replace("/lock");
    const subscription = AppState.addEventListener(
      "change",
      async (nextAppState) => {
        if (nextAppState === "background") {
          //   recordStartTime();
          // blur the screen here
        } else if (
          nextAppState === "active" &&
          appState.current.match(/background/)
        ) {
          const elapsed = 4000; //Date.now() - (storage.getNumber(":time:") || 0);
          if (elapsed > 3000 && isSignedIn) {
            router.replace("/lock");
          }
        }
        appState.current = nextAppState;
      }
    );
    return () => {
      subscription.remove();
    };
  }, []);

  //   const recordStartTime = () => {
  //     storage.set(":time:", Date.now());
  //   };

  return children;
};
