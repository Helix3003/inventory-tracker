// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2FBv4QnSfKd7bHd1yEk0_cfdeq7hl1RU",
  authDomain: "inventory-tracker-ac423.firebaseapp.com",
  projectId: "inventory-tracker-ac423",
  storageBucket: "inventory-tracker-ac423.appspot.com",
  messagingSenderId: "976354538847",
  appId: "1:976354538847:web:df3f471a577c88fb0332ea",
  measurementId: "G-Q6X9MP2JJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export {firestore} 