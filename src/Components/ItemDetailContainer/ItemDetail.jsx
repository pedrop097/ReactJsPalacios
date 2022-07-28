//@tscheck
import React from 'react'
import ItemCount from '../ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { myContext } from '../../CartContext/CartContext';
import { useContext } from 'react';

export default function ItemDetail({id, title, price, img, descripcion}) {


  const [changeButton, setChangeButton] = useState(true);
  const {addItem} = useContext(myContext)
  const  product = {id, title , price, img, descripcion }
  function onAdd(cant) {
    alert(`Agregue ${cant} ${title}  al carrito`);
    setChangeButton(false)
addItem(product, cant)
  }

  return (
    <div style={{margin:"10px", display:"flex", justifyContent:"center"}}>
    <div style={{ border: "2px solid black", margin: "40px", width:"350px" }}>
      <div style={{ width: "18rem", color: "black", margin: "20px", display: "flex", alignItems: "center" }}>
        <img src={img} className="card-img-top" style={{ width: "700px" }} alt="Dioniso" />
        <div className="card-body">
          <div style={{ margin: "10px" }}>
            <h3 style={{ color: "darkgrey" }} >{title}</h3>
            <h5>Descripcion: {descripcion}</h5>
            <h4>Precio ${price}</h4>
          </div>

          {
            changeButton ?
              <ItemCount stock={5} initial={1} onAdd={onAdd} />
              :
              <button style={{margin:"15px"}}>

                <Link to={'/cart'} style={{ color: 'inherit', textDecoration: 'none'}}>  Finalizar mi compra </Link>

              </button>
          }

        </div>
      </div>
    </div>
    </div>
  )
}