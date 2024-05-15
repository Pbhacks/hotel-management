import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDZs0lEpxY3-BLzRreKLg6RyuUcjtL21-o",
    authDomain: "hotel-management-3a1a8.firebaseapp.com",
    projectId: "hotel-management-3a1a8",
    storageBucket: "hotel-management-3a1a8.appspot.com",
    messagingSenderId: "949939534436",
    appId: "1:949939534436:web:8f0fcf642131c9773efd71"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { firebaseConfig , auth };