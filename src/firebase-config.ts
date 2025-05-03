import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getMessaging } from 'firebase/messaging'
import { getFirestore } from 'firebase/firestore'

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBdSYxzurkc4pTVxA4P89YdfBo-RZVUZBw",
  authDomain: "exam-tracker-532c8.firebaseapp.com",
  projectId: "exam-tracker-532c8",
  storageBucket: "exam-tracker-532c8.firebasestorage.app",
  messagingSenderId: "221619457061",
  appId: "1:221619457061:web:a8d5662e1a79a8e1ae43cc",
  measurementId: "G-T7E3CQ3P73"
}

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig)

// ✅ Export Firebase services
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const messaging = getMessaging(app)
export const db = getFirestore(app);
