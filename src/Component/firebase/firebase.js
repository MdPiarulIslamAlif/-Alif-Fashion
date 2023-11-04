import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCkU63AvTBdf671yC17J4peOuMznCtwy0s",
  authDomain: "smooth-topic-400413.firebaseapp.com",
  projectId: "smooth-topic-400413",
  storageBucket: "smooth-topic-400413.appspot.com",
  messagingSenderId: "390298163394",
  appId: "1:390298163394:web:5b8112df1f62d80182435b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
