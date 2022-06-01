import * as firebase from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyB42ab0qD3LOTsL5aIrj_jA6XiH5JC32vc",
  authDomain: "car-saviors.firebaseapp.com",
  projectId: "car-saviors",
  storageBucket: "car-saviors.appspot.com",
  messagingSenderId: "943720805591",
  appId: "1:943720805591:web:8c1c7bde0d827520beac92",
  measurementId: "G-XBHM1FK1L2",
};

let db, storage;
let Firebase = firebase.initializeApp(firebaseConfig);

export { db, Firebase, storage };
