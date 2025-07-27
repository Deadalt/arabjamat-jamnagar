// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj912pLGQg06hUXcJi5XSwAWJailUWcZs",
  authDomain: "arabjamatjamnagar.firebaseapp.com",
  projectId: "arabjamatjamnagar",
  storageBucket: "arabjamatjamnagar.firebasestorage.app",
  messagingSenderId: "257628939713",
  appId: "1:257628939713:web:8eab9357803ee72c6cbb40",
  measurementId: "G-4SC1KSRV8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);