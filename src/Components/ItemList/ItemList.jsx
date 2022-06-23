import React from 'react'
import Item from '../Item/Item'
export default function ItemList({productList}) {
productList.map((item) =>
  <Item  key={item.id} id={item.id}
  title={item.title} price={item.price}/>
 )

}
