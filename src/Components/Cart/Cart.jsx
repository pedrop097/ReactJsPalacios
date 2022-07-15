import React from 'react'
import { myContext } from '../../CartContext/CartContext';
import { useContext } from 'react';


import "./Cart.css";
import {Link} from 'react-router-dom';







export default function Cart() {
    
    const {cart, removeItem, clear, condicionCartVacio, importeTotal} = useContext(myContext);  


  return (
    <>
    <div>
      <p  style={{color:'#e0f193d7', textAlign:'center', margin:'2rem'}} variant="h4"> Carrito </p>

      <div>
      <div  aria-label="simple table">
        <div>
          <div>
            <p>FOTO</p>
            <p align="right">Producto</p>
            <p align="right">Precio Unitario</p>
            <p align="right">Subtotal</p>
            <p align="right">Cantidad agregada</p>
            <p align="right"></p>
          </div>
        </div>
        <div>
          {cart.map((row) => (
            <div
              key={row.id}
              
            >
              <p>
                <div style={{width:'2rem'}}>
                <img src=" {row.img}" alt="{row.title}"/>
                </div>                
              </p>
              <p align="right">{row.title}</p>
              <p align="right">$ {row.price}</p>
              <p align="right">$ {row.price*row.quantity}</p>
              <p align="right">{row.quantity}</p>
              <p align="right"><button variant="contained" onClick={()=>{removeItem(row.id)}} > Eliminar </button></p>
            </div>
          ))}
        </div>
      </div>
    </div>

        <div className={condicionCartVacio ? 'SeVe' : 'NoSeVe'}>
          <div  style={{backgroundColor:'#283322', borderRadius:'10px', padding:'10px', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h5 style={{color:'#e0f193d7', fontFamily:'Joan'}}> Tu carrito está vacío, te invitamos a conocer nuestros productos. </h5>
            <button variant="contained"> <Link to={"/"}  style={{ color: 'inherit', textDecoration: 'none' }}> Comenzar a comprar</Link> </button>
          </div>
        </div>
        <div className={condicionCartVacio ? 'NoSeVe' : 'SeVe'}>
          <div className="divFinalizarCompra">
            <h5 style={{color:'#e0f193d7', textAlign:'center'}} variant="h5">
              Importe total  $ {importeTotal}
            </h5>
            <div>
              <button variant="contained">Finalizar compra</button>
              <button variant="outlined" onClick={()=>{  clear()}}  sx={{ color:'secondary.main'}}> Vaciar carrito</button>
            </div>
          </div>
        </div>

    </div>

    </>
  );


    
}