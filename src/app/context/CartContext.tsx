"use client";
import { CartItems, CartItemsArr } from "@/models/cartItemsModel";
import { ChildrenProps } from "@/models/childrenPropsModel";
import { createContext, useContext, useState } from "react";

const CartContext = createContext({} as CartItemsArr);

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }: ChildrenProps) => {

  const [allCartItems, setAllCartItems] = useState<CartItems[]>([]);

  const handleAddOrUpdateCartItem = (id: number) => {
    setAllCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === id);
      if (!existingItem) {
        return [...prev, { id, qty: 1 }];
      } else {
        
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductsQty = (id : Number) => {
    return allCartItems.find(item=>item.id === id)?.qty || 0
  }

  const totalQty = allCartItems.reduce((total , item)=>{
    return total + item.qty
  },0)

  return (
    <CartContext.Provider value={{ allCartItems, handleAddOrUpdateCartItem , getProductsQty , totalQty }}>
      {children}
    </CartContext.Provider>
  );
};
