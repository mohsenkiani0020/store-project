"use client"
import { useCartContext } from "@/app/context/CartContext"

interface QuantitySelectorProps {
  id : number
}

function QuantitySelector({id}:QuantitySelectorProps) {
  const {allCartItems , handleAddOrUpdateCartItem , getProductsQty} = useCartContext()
  console.log("ss",allCartItems);
  
  return (
    <div>
    <button onClick={()=>handleAddOrUpdateCartItem(+id)} className="px-4 py-2 bg-sky-400 rounded-sm">+</button>
    <span className="p-4">{getProductsQty(+id)}</span>
    <button className="px-4 py-2 bg-sky-400 rounded-sm">-</button>
  </div>
  )
}

export default QuantitySelector