"use client";
import { useCartContext } from "@/app/context/CartContext";

interface QuantitySelectorProps {
  id: string | number;
}

function QuantitySelector({ id }: QuantitySelectorProps) {
  const {
    handleAddOrUpdateCartItem,
    getProductsQty,
    handleRemoveOrUpdateCartItem,
    handleRemoveCartItem,
  } = useCartContext();

  return (
    <>
      <div>
        <button
          onClick={() => handleAddOrUpdateCartItem(+id)}
          className="px-4 py-2 bg-sky-400 rounded-sm"
        >
          +
        </button>
        <span className="p-4">{getProductsQty(+id)}</span>
        <button
          onClick={() => handleRemoveOrUpdateCartItem(+id)}
          className="px-4 py-2 bg-sky-400 rounded-sm"
        >
          -
        </button>
      </div>
      <div>
        <button
          className="bg-red-500 text-white py-2 px-7 "
          onClick={() => handleRemoveCartItem(+id)}
        >
          حذف از سبد خرید
        </button>
      </div>
    </>
  );
}

export default QuantitySelector;
