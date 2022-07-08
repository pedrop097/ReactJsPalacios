import React, { useState } from 'react'
import {Link} from 'react-router-dom'


export default function ItemCount({ stock, initial, onAdd, itemProd}) {
const [count,setCount] = useState(initial)
const Add =  ()=> {
    setCount(count + 1)
}
const Res = () => {
    setCount(count - 1)
}
return(
<>
Artículo {itemProd.id}
    <div style={{margin:"10px", display:"flex", justifyContent:"space-evenly"}}>
    <button style={{margin:"10px", height:"32px"}} onClick={Add} disabled={count === stock}>+</button>
    <h1>{count}</h1>
    <button style={{margin:"10px", height:"32px"}} onClick={Res} disabled={count === initial}>-</button>
    </div>
    <div>
    <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
    <button>
            <Link style={{textDecoration:"none", color:"black",fontFamily:"sans-serif"}} to={"/CarWidget"}>Finalizar Compra</Link>
             </button>
             </div>
    </>
    )

}

