
//ts-check
import React from 'react'
import {Link} from 'react-router-dom';
export default function Item({id, price, title, img}) {
  return (

    <div className="card" style={{ border:"2px solid black", width: "18rem", color:"black", margin:"20px"}}>
    <img src={img} className="card-img-top"  alt="Dioniso"/>
    <div className="card-body" style={{margin: "10px", display:"flex", justifyContent:"center", flexDirection:"column"}}>
      <h5 className="card-title" style={{color: "black"}} >{id}) {title}</h5>
      <p className="card-text">Precio ${price}</p>
<button>
<Link style={{ textDecoration:"none", color:"black"}} to={`/item/${id}`}>
Ver detalle de producto
</Link>
</button>
</div>
        

  </div>

  )
}
