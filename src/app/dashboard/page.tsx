"use client";
import Container from "@/components/Container";
import { ChangeEvent, useState } from "react";
import products from "@/services/products";

function Dashboard() {
  const [newProduct, setNewProduct] = useState({
    image: "",
    title: "",
    price: "",
    description: "",
  });

  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleAddNewProduct = async () => {
    const response = await products.postProduct({
      id: Date.now(),
      image: newProduct.image,
      title: newProduct.title,
      price: parseFloat(newProduct.price),
      description: newProduct.description,
    });
    
    
  };

  return (
    <Container>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <input
          onChange={handleChangeProduct}
          value={newProduct.title}
          name="title"
          className="border p-1"
          type="text"
          placeholder="عنوان"
        />
        <input
          onChange={handleChangeProduct}
          value={newProduct.price}
          name="price"
          className="border p-1"
          type="text"
          placeholder="قیمت"
        />
        <input
          onChange={handleChangeProduct}
          value={newProduct.image}
          name="image"
          className="border p-1"
          type="text"
          placeholder="عکس"
        />
        <textarea
          onChange={handleChangeProduct}
          value={newProduct.description}
          name="description"
          className="col-span-3 border p-1"
          placeholder="توضیحات"
        ></textarea>
      </div>
      <button
        onClick={handleAddNewProduct}
        className="bg-blue-600 text-white py-2 px-7 rounded-md mt-4"
      >
        ذخیره محصول
      </button>
    </Container>
  );
}

export default Dashboard;
