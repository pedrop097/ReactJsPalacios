import React from 'react'
import { useEffect } from 'react';
//@ts-check
import { createContext, useState } from 'react';

export const myContext = createContext();
export default function CartContext({children}) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart)
    }, [cart])

    const isInCart = (id) => {
        return cart.find((product) => product.id === id);
    
    }
 

    
    function addItem(item, quantity) {
        
        if(isInCart(item.id)){
            //producto existe
            const productUpdate = cart.map((product) => product.id === item.id ? {...product, cantidad: product.cantidad + quantity} : product)

       setCart([...productUpdate])
        }else{
         
            setCart([...cart,{...item,"cantidad": quantity, total : item.price * quantity}]);
            
        }
       
    }
    function removeItem(itemId) {
        setCart(cart.filter((i) => i.id !== itemId ))
    }

    function clear() {
       
    setCart([])
      
         
    }
    
  
  return (

    <div><myContext.Provider value={{cart, addItem, removeItem, clear, setCart}}>
        
      {children}
      </myContext.Provider>
      </div>
  )
}