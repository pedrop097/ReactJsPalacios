
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
   const [open,setOpen] = React.useState(false);
function handleClickComprar(){

const pedido = {buyer: {nombre: nombre, tel: tel, email: email}, 
items: [JSON.stringify(cart)],
};



const db = getFirestore();


if (!nombre || !tel || !email) return;
const collectionRef = collection(db,'pedidos');
addDoc(collectionRef, pedido).then(({id})=> setIdCompra(id))
}

function CamposValidados(){
  if(nombre==="" || tel==="" || email===""){
      setOpen(true)
   }else {
      handleClickComprar();
      alert('Su numero Id de compra es:' + (idCompra))
  }
}

function validarEmail(valor){
  let re = /\S+@\S+\.\S+/;
  if(  re.test(valor)  && (valor!=="")){
      setEmail(valor)
      localStorage.setItem('email', JSON.stringify(valor))    
  }
}

 
function validarNombre(valor){            
  if( (/^[A-z ]+$/.test(valor)) && (valor!=="") ){
  setNombre(valor)
  localStorage.setItem('name', JSON.stringify(valor))    
  } 
}
function validarTel(valor){
  let numTel = /^\d{8,12}$/;
  if( valor.match(numTel)  && (valor!=="") ){
      setTel(valor)
      localStorage.setItem('phone', JSON.stringify(valor))    
  }
}

return (
    <div style={{margin:"20px"}}>


        <h1>Complete los datos para finalizar su compra</h1>
        <br/>
     <input onChange={(e)=> {validarNombre(e.target.value)}}  type={"Text"} placeholder={"Ingrese Nombre"}></input>
     <br />
     <input onChange={(e)=> {validarTel(e.target.value)}} type={"Tel"} placeholder={"Ingrese Telefono"}></input>
     <br />
     <input onChange={(e)=> {validarEmail(e.target.value)}} type={"email"} placeholder={"Ingrese Email"}></input>

     
              
     <br />
     <br/>


     <button onClick={()=>{
                    CamposValidados()
                }}>Confirmar compra</button>
    </div>
  )
}
