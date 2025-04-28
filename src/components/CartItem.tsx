"use client";
import { CartItems } from "@/models/cartItemsModel";
import QuantitySelector from "./QuantitySelector";
import productsItem from "@/services/products";
import { useEffect, useState } from "react";
import { Products } from "@/models/productsModel";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";

function CartItem({ id, qty }: CartItems) {
  const [data, setData] = useState<Products>();
  useEffect(() => {
    async function getData() {
      const data = await productsItem.getProductsItems(id.toString());
      setData(data);
    }
    getData();
  }, []);
  return (
    <div className="grid grid-cols-12 shadow-md mt-4">
      <div className="col-span-3">
        <Image
          src={`/images/products/${data?.image}`}
          alt={data?.title || "Product image"}
          width={500}
          height={500}
        />
      </div>
      <div className="col-span-9 p-4 flex gap-3.5 flex-col">
        <h2 className="font-bold text-2xl">{data?.title}</h2>
        <p>
          تعداد :<span> {qty} </span>
        </p>
        <p className="font-bold ">
          قیمت{" "}
          <span className="text-red-500">{formatPrice(data?.price || 0)}</span>
        </p>
        <QuantitySelector id={id} />
      </div>
    </div>
  );
}

export default CartItem;
