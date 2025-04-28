"use client";

import { Products } from "@/models/productsModel";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";

function ProductItem({ image, title, price, description }: Products) {
  return (
    <div className="shadow-md p-3 rounded-sm">

      <Image
        src={`/images/products/${image}`}
        alt={title}
        width={500}
        height={500}
        className="max-h-52 "
      />
      <h2 className="py-2">{title}</h2>
      <p className="text-justify">{description}</p>
      <p className="mt-3">
        قیمت : <span className="text-red-600">{formatPrice(price)}</span>
      </p>
    </div>
  );
}

export default ProductItem;
