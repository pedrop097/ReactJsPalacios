import React, { useEffect } from 'react'
import { useState } from 'react';
import Cats from './Cats';

export default function CatsContainer() {
    
    const [cat, setCat] = useState({})
    useEffect(() =>{

        fetch('https://catfact.ninja/fact')
  .then((response) => response.json())
 .then((data) => {  
    console.log(data);
   setCat(data);
 
 
 
 
   })
 .catch((e) => console.log(e))
 .finally(() =>{
    //no hacer nada
 })
    },[]);
    return (
    <>
        <Cats  cat={cat}/>
    </>
  );
  }
