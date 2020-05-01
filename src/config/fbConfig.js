import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDbaiIBhtnR4cs0bZdRkt0Hezq87O_QEDU",
  authDomain: "social-drinking-games.firebaseapp.com",
  databaseURL: "https://social-drinking-games.firebaseio.com",
  projectId: "social-drinking-games",
  storageBucket: "social-drinking-games.appspot.com",
  messagingSenderId: "911851681062",
  appId: "1:911851681062:web:7ed2d6dcc2ae41db4b7de7",
  measurementId: "G-G718LY33R6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.analytics();

export default firebase;
