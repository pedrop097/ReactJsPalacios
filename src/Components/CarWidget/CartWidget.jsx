//@ts-check
import React from 'react'
import { myContext } from '../../CartContext/CartContext';
import { useContext } from 'react';
export default function CartWidget() {

    const {cantItems} = useContext(myContext);

    return <div className='carrito'>     
        <img src="../imagenes/carrito.png"  width="40" height="30" alt="" />
        <div className={cantItems===0 ? 'NoSeVe' : 'SeVe' }> <p> {cantItems}  </p> </div>

        
        </div>   
  }

