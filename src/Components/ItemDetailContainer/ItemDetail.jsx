import React from 'react'
import { useContext } from 'react';
import { myContext } from '../CartContext/CartContext';
import ItemCount from '../ItemCount'


export default function ItemDetail({prodItem}) {

  const {addItem} = useContext(myContext);
  
  function onAdd(productos,cantidadStock) {
    if((productos>0)&&(cantidadStock>0)){
      addItem(prodItem, productos)
      alert("¡Agregue "+ JSON.stringify(productos)+ " de "+ prodItem.title+ "a tu carrito!")
  }
}
  return (
    <div style={{border:"2px solid black", margin:"30px"}}>
  <div style={{width: "18rem", color:"black", margin:"20px", display:"flex",alignItems:"center"}}>
    <img src={prodItem.img} className="card-img-top" style={{width:"700px"}} alt="Dioniso"/>
    <div className="card-body">
      <div style={{margin:"10px"}}>
      <h3  style={{color: "darkgrey"}} >{prodItem.title}</h3>
      <h5>Descripcion: {prodItem.descripcion}</h5>
      <h4>Precio ${prodItem.price}</h4>
      </div>

   <ItemCount
            stock={5}
            initial={1}
            onAdd={onAdd}
          
          />


    </div>
  </div>
    </div>
  )
}
