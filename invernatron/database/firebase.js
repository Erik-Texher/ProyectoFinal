// import firebase from 'firebase'
// import 'firebase/firestore'

import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBEJ4QWCsBS36uyiozdbeZQhLLHJZzGBho",
  authDomain: "invernatron-a7420.firebaseapp.com",
  databaseURL: "https://invernatron-a7420-default-rtdb.firebaseio.com",
  projectId: "invernatron-a7420",
  storageBucket: "invernatron-a7420.appspot.com",
  messagingSenderId: "674877174245",
  appId: "1:674877174245:web:2ea87dcd9250d474b7bf0c",
  measurementId: "G-KK4Z6GYYX9"
};

initializeApp(firebaseConfig);

export const database = getFirestore()
