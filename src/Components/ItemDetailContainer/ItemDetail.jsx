import React from 'react'

export default function ItemDetail({id, title, price, img, descripcion}) {
  return (
    <div>
  <div className="card" style={{width: "18rem", color:"black", margin:"20px"}}>
    <img src={img} className="card-img-top" alt="Dioniso"/>
    <div className="card-body">
      <h5 className="card-title" style={{color: "black"}} >{id}) {title}</h5>
      <p className="card-text">{descripcion}</p>
      <p className="card-text">Precio ${price}</p>

    </div>
  </div>
    </div>
  )
}
