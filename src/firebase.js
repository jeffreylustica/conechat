import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBfUEXfDuZmwT__aOsFlKGvgpD6LBxs6Bs",
    authDomain: "conechat-2b062.firebaseapp.com",
    projectId: "conechat-2b062",
    storageBucket: "conechat-2b062.appspot.com",
    messagingSenderId: "243060112853",
    appId: "1:243060112853:web:ed4b37a8c92dd28416115c"
}).auth()