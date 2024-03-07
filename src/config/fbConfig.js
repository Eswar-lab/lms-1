import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions'
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/storage';




const firebaseConfig = {
    apiKey: "AIzaSyAsaV7eYS-zpNVG4Wk1nXUjQDmHKhMOiJQ",
  authDomain: "qrproject-69c75.firebaseapp.com",
  databaseURL: "https://qrproject-69c75-default-rtdb.firebaseio.com",
  projectId: "qrproject-69c75",
  storageBucket: "qrproject-69c75.appspot.com",
  messagingSenderId: "503988137670",
  appId: "1:503988137670:web:19527fd2cfe4cc6cb8f1c7",
  measurementId: "G-DGD6TG61DK"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const storage = firebase.storage();
const functions = firebase.functions();

export {
    storage,
    functions,
    firebase as default
}
