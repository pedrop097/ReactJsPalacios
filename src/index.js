import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CartContext from './CartContext/CartContext';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDqNjuiYGyY8y-SQFvmrOfTv3aV0cpx6vE",
  authDomain: "ecommerce-pedro-palacios.firebaseapp.com",
  projectId: "ecommerce-pedro-palacios",
  storageBucket: "ecommerce-pedro-palacios.appspot.com",
  messagingSenderId: "217447015725",
  appId: "1:217447015725:web:22f3016c687702de919fa4"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
  <CartContext>
  <App />
</CartContext>
 
  // </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
