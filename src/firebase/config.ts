import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAAOeyT_-Im5NgXk60KoIPyyIR_TALCw4A",
  authDomain: "bounce-hub.firebaseapp.com",
  databaseURL: "https://bounce-hub-default-rtdb.firebaseio.com",
  projectId: "bounce-hub",
  storageBucket: "bounce-hub.appspot.com",
  messagingSenderId: "35621264611",
  appId: "1:35621264611:web:189b16889c84e6450439d6",
  measurementId: "G-23FL81529V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage, db };