
//@ts-check

import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'
import {collection, getDocs, getFirestore, where, query} from "firebase/firestore";

export default function ItemListContainer() {
  const [productsList, setProductlist] = useState({})
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()
 
useEffect(()=> {

  const db = getFirestore();
  const collectionRef = collection(db, 'products');
  const collectionFiltrada = categoryId? query(collectionRef, where('category', '==', categoryId)) : collectionRef
  getDocs(collectionFiltrada)
  .then((res)=> {
      const arr = res.docs.map((element)=>({...element.data(), id: element.id}));
      setProductlist(arr);
})
.catch(err=> console.log(err))
.finally(()=> setLoading(false))
},[categoryId])

return (
  <div>
      {
   loading?
   <div>Cargando...</div>
    :
    <div style={{margin:"10px", display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
<ItemList  productsList={productsList}/>
</div>
      }
  </div>
)



}