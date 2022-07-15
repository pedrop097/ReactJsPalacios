//@ts-check

import './App.css';
import Nav from './Components/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
 import ItemListContainer from './Components/itemListContainer/ItemListContainer';
// import ItemCount from './Components/ItemCount';

import  {BrowserRouter, Routes, Route} from 'react-router-dom'

import { myContext } from './CartContext/CartContext';
import { useContext } from 'react';
import Cart from './Components/Cart/Cart';





// let initial = 1;
// let stock = 5;


function App() {
  const {cart, addItem, removeItem, clear, setCarritoVacio, carritoVacio} = useContext(myContext);
 
  return (

    <>
    
      
        
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element ={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element ={<ItemListContainer/>}/>
      <Route path='/item/:itemId' element ={ <ItemDetailContainer/> }/>
      <Route path="/cart" element={<Cart />} />
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
