import firebaseConfig from "./Firebase.config.js"
import { initializeApp } from "firebase/app";

const intializeFirebaseApp=()=>{
    initializeApp(firebaseConfig);
}

export default intializeFirebaseApp;