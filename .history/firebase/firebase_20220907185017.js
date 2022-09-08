import { initializeApp } from "firebase/app";
import { getAuth, getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Optionally import the services that you want to use
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyClIRAbxkYz8CnzVyYpr0xG2aa1BmINi4E",
    authDomain: "schemss-main.firebaseapp.com",
    projectId: "schemss-main",
    storageBucket: "schemss-main.appspot.com",
    messagingSenderId: "438329819615",
    appId: "1:438329819615:web:0cd1f3705e2d541f10c46a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword};