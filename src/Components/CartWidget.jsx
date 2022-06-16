//@ts-check
import React, { Component } from 'react'

export default function CartWidget({ cant }) {

    return <div className='carrito'>     
        <img src="./carrito.png"  width="40" height="30" alt="" />
     
        {cant}
        </div>   
  }

