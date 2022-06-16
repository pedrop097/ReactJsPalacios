// import logo from './logo.svg';
//import React from 'react';
//@ts-check

import { logDOM } from '@testing-library/react';
import './App.css';
import Nav from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">

        <ItemListContainer />
        <p>Somos una empresa dedicada a la venta de bebidas alcoholicas, especialmente de vinos.</p>
        <img src="./logotico.png"></img>


      </header>

    </div>
  );
}

export default App;
