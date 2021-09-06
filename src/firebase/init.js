// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpD6TJyyXI9xEEV1WxB4hqtlp5j8LBdqY",
  authDomain: "delismoothies-a724c.firebaseapp.com",
  projectId: "delismoothies-a724c",
  storageBucket: "delismoothies-a724c.appspot.com",
  messagingSenderId: "800238208777",
  appId: "1:800238208777:web:9ae3850b90785b36a4f5d8",
  measurementId: "G-ZHEHVPBMQ6"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()