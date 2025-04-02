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
  return (
    <CartContext.Provider value={{ allCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
