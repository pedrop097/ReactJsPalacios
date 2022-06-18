import React, { useEffect, useState } from 'react'


export default function ItemCount({stock, initial}) {
 //let carrito = initial;
 
 const[carrito, setCarrito] = useState(initial);


    //  useEffect(() =>{
    //     if (carrito <= 5){
    //         initial++;
    //          }

    //  }, []);
  
    function aumentarStock  (){
        if(carrito <5 ){
setCarrito(carrito + 1);
        }
else{
setCarrito(carrito);
}

  }
    return (
    <div>
      <p>Vino Alma Mora</p>
      <p>$1000</p>
       <p>Productos Añadidos : {carrito}</p>
      <p> Maximo Stock Permitido : {stock} </p>
      
      <p><button onClick={() => aumentarStock()}
       style={{border: "3px solid black"}}>Agregar Item</button></p>

    </div>
  )
}
