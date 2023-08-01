import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBSiN0b_gMwoHNWqgPJLFHXGloJrfa72PY",
    authDomain: "vehicle-api-storage.firebaseapp.com",
    projectId: "vehicle-api-storage",
    storageBucket: "vehicle-api-storage.appspot.com",
    messagingSenderId: "725485448283",
    appId: "1:725485448283:web:b613b304b785c3b531237e"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)