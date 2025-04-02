"use client"
import { useCartContext } from "@/app/context/CartContext"

function QuantitySelector() {
  const {allCartItems} = useCartContext()
  console.log("ss",allCartItems);
  
  return (
    <div>
    <button className="px-4 py-2 bg-sky-400 rounded-sm">+</button>
    <span className="p-4">44</span>
    <button className="px-4 py-2 bg-sky-400 rounded-sm">-</button>
  </div>
  )
}

export default QuantitySelector