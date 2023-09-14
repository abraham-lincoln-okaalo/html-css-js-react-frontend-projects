import React from 'react';
import ReactDOM from 'react-dom/client';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GlobalStyle } from './globalStyles';
import './index.css';
import { App } from './App';
import { FirebaseContext } from './context/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCZJC6rJMLVnqFcVMz36mWT0zP4FVWOJ7w",
  authDomain: "netflix-clone-5191a.firebaseapp.com",
  databaseURL: "https://netflix-clone-5191a.firebaseio.com",
  projectId: "netflix-clone-5191a",
  storageBucket: "netflix-clone-5191a.appspot.com",
  messagingSenderId: "286346602316",
  appId: "1:286346602316:web:bb7946b26ee477cbb2d1e9",
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);