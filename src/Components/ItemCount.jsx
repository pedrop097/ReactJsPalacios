import React, { useState } from 'react'
import {Link} from 'react-router-dom'


export default function ItemCount({ stock, initial, onAdd}) {

  const[changeButton, setChangeButton] = useState(true)  
const [cant,setCant] = useState(initial)
const Add =  ()=> {
    setCant(cant + 1)
}
const Res = () => {
    setCant(cant - 1)
}
return(

    
<>

    <div >
              <button  onClick={ ()=> setChangeButton(!changeButton)} >
                  Agregar al carrito
                </button>
                {changeButton ? (
                  
                      <div style={{margin:"10px", display:"flex", justifyContent:"space-evenly"}}>
                      <button style={{margin:"10px", height:"32px"}} onClick={Add} disabled={cant === stock}>+</button>
                      <h1>{cant}</h1>
                      <button style={{margin:"10px", height:"32px"}} onClick={Res} disabled={cant === initial}>-</button>
                      </div>
                 
                               
                ) : (
                    <div>
                        <p>{onAdd(cant)}</p>
                        <button> 
              <Link to={'/cart'} style={{ color: 'inherit', textDecoration: 'none' }} >  Finalizar mi compra </Link> 
            </button> 
                        
                        </div>
                )
                
                }
              </div>

    
    </>
    
    )

}

