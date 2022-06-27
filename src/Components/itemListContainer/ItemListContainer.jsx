
//@ts-check

import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';



export default function ItemListContainer({ saludo }) {
  const [productsList, setProductlist] = useState([])
  useEffect(() => {
    let products = [
      {id:"1" ,title: "Vino Dilema", price :1000, img:"./dilema.png"},
      {id:"2" ,title: "Cerveza Corona", price :1200, img:"./corona.png"},
      {id:"3" ,title: "Vodka Absolut", price :3000, img:"absolut.png"},
    ];
     new Promise ((resolve, reject) => {
    setTimeout(() => {
    resolve (products)
    }, 2000)
      }).then((res)=>{
        setProductlist(res)
        
      })
    }, [])
    

  return (
    <>
      <h1>{saludo}</h1>
  <ItemList productsList={productsList}/>
    </>
  )
}
