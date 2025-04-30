"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const CartIcon = () => {
  const allCartItems = useSelector((state: RootState) => state.cart.items);
  const totalQty = allCartItems.reduce((total, item) => total + item.qty, 0);

  return (
    <div className="relative">
      <Link href="/cart">
        <ShoppingCart className="w-6 h-6" />
        {totalQty > 0 && (
          <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalQty}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;
