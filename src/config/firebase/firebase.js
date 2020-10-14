// import firebase from 'firebase';
// import 'firebase/auth';


import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCR9TC2vjESySAwjzwmrwJrQMNQRRjqRjk",
    authDomain: "foodstore-1.firebaseapp.com",
    databaseURL: "https://foodstore-1.firebaseio.com",
    projectId: "foodstore-1",
    storageBucket: "foodstore-1.appspot.com",
    messagingSenderId: "329111313599",
    appId: "1:329111313599:web:baceda43f2d06878bafa0a",
    measurementId: "G-C8JEKVSKSN"
};
// Initialize Firebase
// export const firebaseApp = firebase.initializeApp(firebaseConfig);

// export default firebaseApp.firestore();


export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;