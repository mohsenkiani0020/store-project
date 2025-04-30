"use client";

import { useEffect } from "react";
import { setCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";

const CartInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      dispatch(setCart(JSON.parse(saved)));
    }
  }, [dispatch]);

  return null;
};

export default CartInitializer;
