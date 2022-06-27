import React from 'react'

export default function Cats({cat}) {
  return (
    <>
    {cat.fact && (
  <>
      <p>Ancho: {cat.fact}</p> 
      <p>Largo: {cat.length}</p> 
  </>
  )}
      </>


  );
}
