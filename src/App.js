//@ts-check

import './App.css';
import Nav from './Components/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
 import ItemListContainer from './Components/itemListContainer/ItemListContainer';
// import ItemCount from './Components/ItemCount';

import  {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartWidget from './Components/CarWidget/CartWidget';





// let initial = 1;
// let stock = 5;


function App() {
  
 
  return (

    <>
    
      
        
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element ={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element ={<ItemListContainer/>}/>
      <Route path='/item/:itemId' element ={ <ItemDetailContainer/> }/>
      <Route path="/cart" element={<CartWidget />} />
    </Routes>
    </BrowserRouter>
    
    
    {/*<div className="App">
    
      <header className="App-header">

        <ItemListContainer saludo="BIENVENIDO A DIONISO SHOP DE BEBIDAS" />
        <p>Somos una empresa dedicada a la venta de bebidas alcoholicas, especialmente de vinos.</p>
    
        <div className="card" style={{ width: "18rem" }}>
          <img src="./imagenes/almamora.png" className="card-img-top" alt="..." />
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



</>
);}

export default App;
