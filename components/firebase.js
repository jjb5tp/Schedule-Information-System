import * as firebase from 'firebase';
import 'firebase/firestore';
//Optionally import the services that you want to use
// import "firebase/auth";
// import "firebase/database";
// import "firebase/firestore";
// import "firebase/functions";
// import "firebase/storage";

const firebaseConfig= {
  apiKey: "AIzaSyCF6oFy3TWkahdTJtufJDELZCnGRgGPGdo",
  authDomain: "schedule-information-system.firebaseapp.com",
  databaseURL: "https://schedule-information-system.firebaseio.com",
  projectId: "schedule-information-system",
  storageBucket: "schedule-information-system.appspot.com",
  messagingSenderId: "809552998630",
  appId: "1:809552998630:web:94de04f1892a50f8274b27",
  measurementId: "G-QCV21ETPED"
}

// Initalize firebase...
if (!firebase.apps.length){ // checks if it has already been initialized
  firebase.initializeApp(firebaseConfig);
}
var database = firebase.firestore();
export default firebase
export {database};