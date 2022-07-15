//@tscheck
import React from 'react'
import ItemCount from '../ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom'


export default function ItemDetail({ title, price, img, descripcion }) {


  const [changeButton, setChangeButton] = useState(true);
  function onAdd(cant) {
    alert(`Agregue ${cant} ${title}  al carrito`);
    setChangeButton(false)

  }

  return (
    <div style={{ border: "2px solid black", margin: "30px" }}>
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
              <button>

                <Link to={'/cart'} style={{ color: 'inherit', textDecoration: 'none' }}>  Finalizar mi compra </Link>

              </button>
          }

        </div>
      </div>
    </div>
  )
}