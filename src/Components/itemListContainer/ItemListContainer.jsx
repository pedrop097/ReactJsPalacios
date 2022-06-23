
//@ts-check

import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';



export default function ItemListContainer({ saludo }) {
  const [productList, setProductlist] = useState([])
  useEffect(() => {
    let products = [
      {id:"1ab" ,title: "Vino", price :1000, pictureURL:"file:///C:/Users/Pedro%20Palacios/Desktop/Curso%20React%20JS/proyecto/public/almamora%20(1).webp"},
      {id:"1ac" ,title: "Vino", price :1200, pictureURL:"./logotico.png"},
      {id:"1ad" ,title: "Vino", price :1000, pictureURL:""},
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
  <ItemList productList={productList}/>
    </>
  )
}
