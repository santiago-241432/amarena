import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChsxYhxc7L19W0AfOhnaU6uw4ZnRzhsaU",
  authDomain: "e-commerce-ddf4f.firebaseapp.com",
  projectId: "e-commerce-ddf4f",
  storageBucket: "e-commerce-ddf4f.appspot.com",
  messagingSenderId: "75433390504",
  appId: "1:75433390504:web:01df81e03efba744472d9d"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

