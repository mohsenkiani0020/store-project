"use client";

import { Products } from "@/models/productsModel";

function ProductItem({ image, title, price, description }: Products) {
  return (
    <div className="shadow-md p-3 rounded-sm">
      <img className="max-h-52 " src={image} alt={title} />
      <h2 className="py-2">{title}</h2>
      <p className="text-justify">{description}</p>
      <p className="mt-3">
        قیمت : <span className="text-red-600">{price}</span>
      </p>
    </div>
  );
}

export default ProductItem;
