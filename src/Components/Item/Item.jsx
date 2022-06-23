
//ts-check
import React from 'react'

export default function Item({id, price, title, img}) {
  return (

    <div className="card" style={{width: "18rem", color:"black", margin:"20px"}}>
    <img src={img} className="card-img-top" alt="Dioniso"/>
    <div className="card-body">
      <h5 className="card-title" style={{color: "black"}} >{id}) {title}</h5>
      <p className="card-text">Precio ${price}</p>

    </div>
  </div>

  )
}
