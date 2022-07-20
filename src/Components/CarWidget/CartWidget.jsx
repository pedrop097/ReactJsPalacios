//@ts-check
import React from 'react'
import { useContext } from 'react'
import { myContext } from '../../CartContext/CartContext'


export default function CartWidget() {
const {cart} = useContext(myContext) 

    return (
    
    <div className='carrito'>     
      
            <img src="../imagenes/carrito.png"  width="40" height="30" alt="" />
            {!!cart.length &&   
        <span>{cart.reduce((p, c)=> p + c.cantidad, 0)}</span>
       
}
        </div> 
    )  
  }

