// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuHA6cEBvdrOIwUFWvT3mnQq6jbqMH-vc",
  authDomain: "realtor-clone-react-6d557.firebaseapp.com",
  projectId: "realtor-clone-react-6d557",
  storageBucket: "realtor-clone-react-6d557.appspot.com",
  messagingSenderId: "671397041422",
  appId: "1:671397041422:web:a63f6578e156c77df8f35f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()