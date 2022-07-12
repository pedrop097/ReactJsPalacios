import React, { useState } from 'react'


export default function ItemCount({ stock, initial}) {

    const [cant, setCant] = useState(initial)

   
    const Add = () => {
        setCant(cant + 1)
    }
    const Res = () => {
        setCant(cant - 1)
    }
    return (
        <>
            <div >

                <div style={{ margin: "10px", display: "flex", justifyContent: "space-evenly" }}>
                    
                    
                    <button style={{ margin: "10px", height: "32px" }} onClick={Res} disabled={cant === initial}>-</button>
                     <h1>{cant}</h1>
                    <button style={{ margin: "10px", height: "32px" }} onClick={Add} disabled={cant === stock}>+</button>
                    
                </div>
            </div>
        </>
    )

}

