import firebase from "firebase/app";

import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "waveform-6bf92.firebaseapp.com",
    databaseURL: "https://waveform-6bf92.firebaseio.com",
    projectId: "waveform-6bf92",
    storageBucket: "waveform-6bf92.appspot.com",
    messagingSenderId: "975092032860",
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);