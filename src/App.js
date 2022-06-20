// import logo from './logo.svg';
//import React from 'react';
//@ts-check

import './App.css';
import Nav from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';



let initial = 1;
let stock = 5;


function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">

        <ItemListContainer saludo="BIENVENIDO A DIONISO SHOP DE BEBIDAS" />
        <p>Somos una empresa dedicada a la venta de bebidas alcoholicas, especialmente de vinos.</p>
        <img src="./logotico.png"></img>

        <div className="card" style={{ width: "18rem" }}>
          <img src="./almamora.png" className="card-img-top" alt="..." />
        </div>

        <div>

          <ItemCount
            stock={stock}
            initial={initial}
          
          />
        </div>
      </header>

    </div>
  );
}

export default App;
