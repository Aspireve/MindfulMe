// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNfI37O4BCXbz0XmwVNH0Or5LQ1OwADuE",
  authDomain: "mindfulme-a6b60.firebaseapp.com",
  projectId: "mindfulme-a6b60",
  storageBucket: "mindfulme-a6b60.appspot.com",
  messagingSenderId: "868858817934",
  appId: "1:868858817934:web:d4433ad1bd34ec1eb588df",
  measurementId: "G-R5KNL5S30P",
  name: "MindfulMe", 
  options: {}, 
  automaticDataCollectionEnabled: true
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseConfig)
const analytics = getAnalytics(app);
