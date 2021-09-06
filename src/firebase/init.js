// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app