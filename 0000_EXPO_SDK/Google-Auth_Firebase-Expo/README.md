# Google Authentication Expo

This is a quick walk through on how to authenticate using `google-firebase` in an `expo` application.

## First things first

We need to follow these steps before we write an code

- Create a google Project
- Go to the developer console and create a new project
  - [Developer Google Console](https://console.developers.google.com/apis/credentials?authuser=1&project=proven-mercury-307113)
  - Click Credentials
  - Click on Create Credentials
  - Select `O Auth Client ID`
  - Select `Application type` options are
    - `web`
    - `ios`
    - `android`
  - Follow this expo documentation it will explain all of the steps above
    - [Expo Google](https://docs.expo.io/versions/v40.0.0/sdk/google/)
- Create a firebase Project
  - [Firebase Console](https://console.firebase.google.com/u/1/project/auth-expo-e6cd4/authentication/providers)
  - Under authentication sign in method should be Google
    - **Configure Web SDK configuration**
      - this is very important you have to create `O Auth Client ID` for web and you will get the credentials copy and paste those under **Configure Web SDK configuration** in firebase google auth
      - i got this answer on stackoverflow [here](https://stackoverflow.com/questions/40450850/error-google-id-token-is-not-allowed-to-be-used-with-this-application-firebase)

## Documentations References

- [Expo Google](https://docs.expo.io/versions/v40.0.0/sdk/google/)
-

### The code for Signing in and out when buttons are clicked

#### `App.js`

```
import * as Google from "expo-google-app-auth";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, LogBox } from "react-native";
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAk-XyzHbcrePFRp1997VmLru-oyLWZTFo",
  authDomain: "auth-expo-e6cd4.firebaseapp.com",
  projectId: "auth-expo-e6cd4",
  storageBucket: "auth-expo-e6cd4.appspot.com",
  messagingSenderId: "941261499412",
  appId: "1:941261499412:web:14fc9031f966de68a08b01",
  measurementId: "G-RNESPGJN82",
};
firebase.initializeApp(firebaseConfig);

export default function App() {
  const [user, setUser] = useState(null);
  const signIn = () => {
    signInWithGoogleAsync();
  };
  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "1017378793061-q68jo2hsart8v23m4u1venv3n08ap3ss.apps.googleusercontent.com",
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ["profile", "email"],
        behavior: "web",
      });

      if (result.type === "success") {
        const { idToken, accessToken } = result;
        const credential = firebase.auth.GoogleAuthProvider.credential(
          idToken,
          accessToken
        );
        firebase
          .auth()
          .signInWithCredential(credential)
          .then((res) => {
            console.log(res.user);
          })
          .catch((error) => {
            console.log("firebase cred err:", error);
          });
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(error);
      return { error: true };
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });
  const signOut = () => {
    firebase.auth().signOut();
  };
  console.log(user);
  LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

```

### Credits

- Stackoverflow
  - [error-google-id-token-is-not-allowed-to-be-used-with-this-application-firebase](https://stackoverflow.com/questions/40450850/error-google-id-token-is-not-allowed-to-be-used-with-this-application-firebase)
