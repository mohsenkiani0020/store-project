"use client";
// import { useCartContext } from "@/app/context/CartContext";
import { AppDispatch } from "@/store";
import { addOrUpdateItem, removeItem, removeOrUpdateItem } from "@/store/cartSlice";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

interface QuantitySelectorProps {
  id: string | number;
}

function QuantitySelector({ id }: QuantitySelectorProps) {
  // const {
  //   handleAddOrUpdateCartItem,
  //   getProductsQty,
  //   handleRemoveOrUpdateCartItem,
  //   handleRemoveCartItem,
  // } = useCartContext();

  const dispatch =  useDispatch<AppDispatch>()
  const allCartItems =  useSelector((state : RootState) => state.cart.items )

  const getProductsQty = (id: Number): number => {
    return allCartItems.find((item) => item.id === id)?.qty || 0;
  };

  return (
    <>
      <div>
        <button
          // onClick={() => handleAddOrUpdateCartItem(+id)}
          onClick={() => dispatch(addOrUpdateItem(+id))}
          className="px-4 py-2 bg-sky-400 rounded-sm"
        >
          +
        </button>
        <span className="p-4">{getProductsQty(+id)}</span>
        <button
          // onClick={() => handleRemoveOrUpdateCartItem(+id)}
          onClick={() => dispatch(removeOrUpdateItem(+id))}
          className="px-4 py-2 bg-sky-400 rounded-sm"
        >
          -
        </button>
      </div>
      <div>
        <button
          className="bg-red-500 text-white py-2 px-7 "
          // onClick={() => handleRemoveCartItem(+id)}
          onClick={() => dispatch(removeItem(+id))}
        >
          حذف از سبد خرید
        </button>
      </div>
    </>
  );
}

export default QuantitySelector;
