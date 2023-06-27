import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAOeyT_-Im5NgXk60KoIPyyIR_TALCw4A",
  authDomain: "bounce-hub.firebaseapp.com",
  databaseURL: "https://bounce-hub-default-rtdb.firebaseio.com",
  projectId: "bounce-hub",
  storageBucket: "bounce-hub.appspot.com",
  messagingSenderId: "35621264611",
  appId: "1:35621264611:web:9902a46eea3abc440439d6",
  measurementId: "G-6NB1CHDLSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const projectDatabase = firebase.database();
export { auth, storage, db, projectStorage, projectFirestore, projectDatabase };