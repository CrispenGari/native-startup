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
