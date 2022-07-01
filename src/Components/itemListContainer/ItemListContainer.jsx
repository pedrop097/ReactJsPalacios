
//@ts-check

import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';
import { getArray } from '../helpers/getArray';
import { array } from '../Data/Data';
import {useParams} from 'react-router-dom'

export default function ItemListContainer() {
  const [productsList, setProductlist] = useState({})
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()
 
useEffect(()=> {
getArray(array)
.then(res=> {
  categoryId?
  setProductlist( res.filter((item)=> item.category === categoryId))
  :
  setProductlist(res)
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