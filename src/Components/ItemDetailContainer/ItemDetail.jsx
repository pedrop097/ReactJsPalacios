import React from 'react'

export default function ItemDetail({title, price, img, descripcion}) {
  return (
    <div style={{border:"2px solid black", margin:"30px"}}>
  <div style={{width: "18rem", color:"black", margin:"20px", display:"flex",alignItems:"center"}}>
    <img src={img} className="card-img-top" style={{width:"700px"}} alt="Dioniso"/>
    <div className="card-body">
      <h5 className="card-title" style={{color: "black"}} >{title}</h5>
      <p className="card-text">Descripcion: {descripcion}</p>
      <p className="card-text">Precio ${price}</p>
   

    </div>
  </div>
    </div>
  )
}
