//@tscheck
import React from 'react'
import { myContext } from '../../CartContext/CartContext';
import { useContext } from 'react';


import "./Cart.css";
import {Link} from 'react-router-dom';







export default function Cart() {
    const {cart, removeItem, clear} = useContext (myContext)
    

  return (
 <div>
  
{cart.length ?

<>
<div>
  <div>
<h2 style={{margin:"40px",display:"flex", justifyContent:"center", fontFamily:"sans-serif"}}>Estas a un paso de finalizar tu compra...</h2>
</div>
  {cart.length && cart.map(item=>

  
    <div>
<div style={{margin:"20px", display:"flex", justifyContent:"space-between"}} key={item.id}> 
<img   style={{ width: "400px" }} src={item.img} alt={item.title}/>
<div style={{margin:"60px"}}>
 <h3>{item.title}</h3>
<h5>Cantidad: {item.cantidad} </h5> 
<h4>total: ${item.total}</h4>
</div>
<button style={{width:"30px", height:"30px",margin:"8px"}} onClick={() => { removeItem(item.id); } }>X</button>

</div>
<div style={{margin:"10px", display:"flex", justifyContent:"flex-end"}}>

</div>


    </div>
    )}
    <div style={{margin:"20px", display:"flex", justifyContent:"center"}}>
  <button onClick={() => { clear(); } }> Vaciar carrito</button>
    </div>
</div>

<h2 style={{margin:"20px"}}>Total de compra: ${cart.reduce((p, c)=> p + c.total, 0)}</h2>
<button> <Link to='/checkout' style={{ color: 'black', textDecoration: 'none' }}> Finalizar compra</Link></button>
</>
:
<Link to="/"> <h3 style={{margin:"20px",display:"flex", justifyContent:"center", textDecoration:"none", fontFamily:"sans-serif"}}>No tenes productos en el carrito, click para ir al inicio</h3></Link>
}

 </div>
    )
  }
