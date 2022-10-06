// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgyk0y59mCnEuvKP9OEHAHhc9Vu0i2ius",
  authDomain: "buy-and-sell-e306a.firebaseapp.com",
  projectId: "buy-and-sell-e306a",
  storageBucket: "buy-and-sell-e306a.appspot.com",
  messagingSenderId: "947963853933",
  appId: "1:947963853933:web:91663eb923324f4b4b9364",
  measurementId: "G-HQKWST0ZFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);