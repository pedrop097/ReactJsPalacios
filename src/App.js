// @ts-nocheck

import './App.css';
// import Nav from './Components/NavBar';
// import ItemListContainer from './Components/itemListContainer/ItemListContainer';
// import ItemCount from './Components/ItemCount';


import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


// let initial = 1;
// let stock = 5;


function App() {
 
  return (
    <>
    {/*<div className="App">
      <Nav />
      <header className="App-header">

        <ItemListContainer saludo="BIENVENIDO A DIONISO SHOP DE BEBIDAS" />
        <p>Somos una empresa dedicada a la venta de bebidas alcoholicas, especialmente de vinos.</p>
    
        <div className="card" style={{ width: "18rem" }}>
          <img src="./almamora.png" className="card-img-top" alt="..." />
        </div>

        <div>

          <ItemCount
            stock={stock}
            initial={initial}
          
          />
        </div>
<div>
 


  </div>
      </header>

  </div>*/}


<ItemDetailContainer />
</>
);}

export default App;
