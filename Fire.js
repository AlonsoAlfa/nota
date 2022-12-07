

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
 apiKey: "AIzaSyAmLBPrp2Cb2oTtIcDT7Aapi4KTdNmLZ5s",
  authDomain: "notes-app-1c6cb.firebaseapp.com",
  projectId: "notes-app-1c6cb",
  storageBucket: "notes-app-1c6cb.appspot.com",
  messagingSenderId: "746478725765",
  appId: "1:746478725765:web:97ae572f90c4101a9a57ec",
  measurementId: "G-TYFQ1MP3RM",
  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}