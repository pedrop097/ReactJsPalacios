//@ts-check
import React from 'react'

export default function CartWidget() {

    let carrito=[
        {
          id:1,
          cantidad:8
        },
        {
          id:2,
          cantidad:10
        }
       ];
         let cantItemsWidget = carrito.reduce((acc, element)=> acc + element.cantidad, 0)

    return <div className='carrito'>     
        <img src="../imagenes/carrito.png"  width="40" height="30" alt="" />
        <div>{cantItemsWidget>0 &&  <p> {cantItemsWidget} </p>}</div>
        
        </div>   
  }

