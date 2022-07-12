import React from 'react'
import { createContext, useState } from 'react';

export const myContext = createContext(null);
export default function CartContext({children}) {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        cart.find((i) => i.id === id);
    
    }
    function addItem(item, quantity) {
        let productoDuplicado = isInCart(item.id);
        if(productoDuplicado){
            removeItem(productoDuplicado.id);
            setCart( [...cart, {...item, cantidad:quantity + productoDuplicado.cantidad}] )
        }else{
            setCart([...cart, {...item, cantidad:quantity}])
        }
        console.log("cart ", JSON.stringify(cart))
    }
    function removeItem(itemId) {
        setCart( cart.filter((i) => i.id !== itemId ) );
    }

    function clear() {
        setCart([])
    }
  return (

    <div><myContext.Provider value={{cart, addItem, removeItem, clear}}>
        
      {children}
      </myContext.Provider>
      </div>
  )
}
