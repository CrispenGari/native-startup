import firebase from "firebase";
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAHI9d0EGDUoY-w6gKCaOerNyz7wfCov5I",
  authDomain: "chatapp-74ff0.firebaseapp.com",
  projectId: "chatapp-74ff0",
  storageBucket: "chatapp-74ff0.appspot.com",
  messagingSenderId: "909246190712",
  appId: "1:909246190712:web:3cc81778bcab31685d098d",
  measurementId: "G-B5RNDQR4R5",
};

const app =
  firebase.apps.length === 0
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const storage = app.storage();
const db = app.firestore();
const auth = firebase.auth();

export { storage, db, auth };
