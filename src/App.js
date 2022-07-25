//@ts-check

import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/itemListContainer/ItemListContainer';
import Nav from './Components/NavBar';
// import ItemCount from './Components/ItemCount';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CartContext from './CartContext/CartContext';
//import { useContext } from 'react';
import Cart from './Components/Cart/Cart';
import CheckOut from './Components/Checkout/CheckOut';





// let initial = 1;
// let stock = 5;


function App() {
  // const {cart, addItem, removeItem, clear, setCarritoVacio, carritoVacio} = useContext(myContext);
 
  return (

    <>
    
      
  <CartContext>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element ={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element ={<ItemListContainer/>}/>
      <Route path='/item/:itemId' element ={ <ItemDetailContainer/> }/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut/>} />
      

    </Routes>
    </BrowserRouter>
    </CartContext>
    
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
