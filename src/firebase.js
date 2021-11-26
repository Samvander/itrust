// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDVvzVWovRju_IB6pG_6yGsLjxP3BLh9Q",
  authDomain: "itrust-react.firebaseapp.com",
  projectId: "itrust-react",
  storageBucket: "itrust-react.appspot.com",
  messagingSenderId: "952283036857",
  appId: "1:952283036857:web:53c0a3eae45752fd45af68",
  measurementId: "G-SE6565EJ93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();