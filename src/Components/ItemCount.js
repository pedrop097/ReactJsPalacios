import React, { useState } from 'react'


export default function ItemCount({ stock, initial }) {


    const [carrito, setCarrito] = useState(initial);


    function restar() {
        setCarrito(carrito - 1);
        if (carrito > 0)
            setCarrito(carrito - 1)
        else {
            setCarrito(carrito);
        }
    }
    function onAdd() {
        if (carrito > 0) {
            alert("Productos en Carrito:"  + (carrito));
        }
        else {
            setCarrito(carrito);
        }
    }
    function sumar() {
        if (carrito < 5) {
            setCarrito(carrito + 1);
        }
        else {
            setCarrito(carrito);
        }

    }
    return (
        <div>
            <p>Vino Alma Mora</p>
            <p>$1000</p>
            <p>Productos Añadidos : {carrito}</p>
            <p> Maximo Stock Permitido : {stock} </p>
            <div className='sumarRestar'>
                <div>
                    <p><button onClick={() => sumar()} style={{ border: "2px solid black" }} >+</button></p>
                </div>

                <div>
                    <p><button onClick={() => restar()} style={{ border: "2px solid black", width: "29px" }}>-</button></p>
                </div>
            </div>
            <p><button onClick={() => onAdd()}
                style={{ border: "3px solid black" }}>Agregar al Carrito</button></p>

        </div>
    )
}

