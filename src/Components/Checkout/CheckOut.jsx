
//@ts-check
import React from 'react'
import { useState } from 'react'
import {addDoc,collection, getFirestore} from "firebase/firestore";
import { myContext } from '../../CartContext/CartContext';
import { useContext } from 'react';



export default function CheckOut() {
    const {cart} = useContext(myContext);

    const [nombre, setNombre] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
   const [idCompra, setIdCompra] = useState('')

function handleClickComprar(){

const pedido = {buyer: {nombre: nombre, tel: tel, email: email}, 
items: [JSON.stringify(cart)],
};

const db = getFirestore();

if (!nombre || !tel || !email) return;
const collectionRef = collection(db,'pedidos');
addDoc(collectionRef, pedido).then(({id})=> setIdCompra(id))
}

return (
    <div>
<p>Su numero de pedido es:{idCompra}</p>

        <h1>Complete los datos para finalizar su compra</h1>
        <br/>
     <input onChange={(e)=> setNombre(e.target.value)}  type={"text"} placeholder={"Ingrese Nombre"}></input>
     <br />
     <input onChange={(e)=> setTel(e.target.value)} type={"tel"} placeholder={"Ingrese Telefono"}></input>
     <br />
     <input onChange={(e)=> setEmail(e.target.value)} type={"email"} placeholder={"Ingrese Email"}></input>
     <br />
     <br/>
     <button  onClick={handleClickComprar}> Comprar</button>

    </div>
  )
}
