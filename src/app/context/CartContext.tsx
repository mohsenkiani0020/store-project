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

  const handleAddOrUpdateCartItem = (id: number): void => {
    setAllCartItems((prev) => {
      const isItemExists = prev.some((item) => item.id === id);

      return isItemExists
        ? prev.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...prev, { id, qty: 1 }];
    });
  };

  const handleRemoveOrUpdateCartItem = (id: number): void => {
    setAllCartItems((prev) => {
      return prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0);
    });
  };

  const handleRemoveCartItem = (id: number): void => {
    setAllCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  

  const getProductsQty = (id: Number): number => {
    return allCartItems.find((item) => item.id === id)?.qty || 0;
  };

  const totalQty = allCartItems.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        allCartItems,
        handleAddOrUpdateCartItem,
        getProductsQty,
        totalQty,
        handleRemoveOrUpdateCartItem,
        handleRemoveCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
