

import React, { useState } from 'react'
import { useEffect } from 'react'
import { getArray } from '../helpers/getArray'
import { array } from '../Data/Data'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {doc, getDoc, getFirestore} from "firebase/firestore";

export default function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    
    const {itemId} = useParams()
useEffect(()=> {
  const db = getFirestore();
  const itemConsultadoRef = doc(db, 'products', itemId);
  getArray(array)
  getDoc(itemConsultadoRef)
  .then((snapshot)=>{
      setProduct({...snapshot.data(), id: snapshot.id});
  })
  .catch(err=> console.log(err))
  .finally(()=> setLoading(false))
},[itemId])

  return (
    <div>
        {
     loading?
     <div>Cargando...</div>
      :
<ItemDetail  {...product}/>

        }
    </div>
  )
}
