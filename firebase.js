
// Shared Firebase module — Firestore only. No Firebase Storage.

import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";

import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-analytics.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCihkEyuxtqj07VlbnENoW1Mg5RCUuHlIY",
  authDomain: "ai-tool-m.firebaseapp.com",
  projectId: "ai-tool-m",
  storageBucket: "ai-tool-m.firebasestorage.app",
  messagingSenderId: "996677486581",
  appId: "1:996677486581:web:ead85d45d6f176e04782bc",
  measurementId: "G-VXY5DZMT3F"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

// Analytics is optional.
isSupported()
  .then((ok) => {
    if (ok) getAnalytics(app);
  })
  .catch(() => {});

export {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp,
  onSnapshot
};
