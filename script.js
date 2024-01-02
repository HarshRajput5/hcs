// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLicTtXfhz-lURKg_N5BTdOdRYJWLXpjs",
  authDomain: "project1-f708d.firebaseapp.com",
  projectId: "project1-f708d",
  storageBucket: "project1-f708d.appspot.com",
  messagingSenderId: "1041737476296",
  appId: "1:1041737476296:web:3761794fa978774474ddfd",
  measurementId: "G-HR44G45FK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);