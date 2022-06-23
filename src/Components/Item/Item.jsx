
//ts-check
import React from 'react'

export default function Item(id, price, title) {
  return (
   
  <div className="card">
  <img  className="card-img-top" alt={title}/>
  <div className="card-body">
    <h5 className="card-title">{title} /: {id}</h5>
    <p className="card-text">Precio:{price}</p>
 
  </div>
</div>
  
  )
}
