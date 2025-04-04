"use client";
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { useCartContext } from "../context/CartContext";
import { useEffect, useState } from "react";
import { Products } from "@/models/productsModel";
import productsItem from "@/services/products";
import { formatPrice } from "@/utils/formatPrice";
import Discounts from "@/services/discounts";

function Cart() {
  const [data, setData] = useState<Products[]>([]);
  const [discountsInput, setDiscountsInput] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const { allCartItems } = useCartContext();
  
  useEffect(() => {
    async function getData() {
      const data = await productsItem.getProducts();
      setData(data);
    }
    getData()
  }, []);
  
  async function getDiscounts() {

    
  }
  
  const totalPrice = (): number => {
    return allCartItems.reduce((total, item) => {
      let selectedProduct = data?.find((product) => item.id == product.id);

      return total + (selectedProduct?.price || 0) * item.qty;
    }, 0);
  };


  const handleSubmitDiscounts = async (e : React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault()
    const data = await Discounts.getDiscounts(discountsInput);
    await getDiscounts()
    let discountedPrice = totalPrice() * data[0].percentage /100
    let finalPrice = totalPrice() - discountedPrice
    setDiscountedPrice(discountedPrice)
    setFinalPrice(finalPrice)
  }





  return (
    <Container>
      <h1 className="mt-4 font-bold">سبد خرید</h1>
      {allCartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}

      <div className="shadow-md p-4">
        <h3>
          قیمت کل :<span> {formatPrice(totalPrice())} تومان</span>
        </h3>
        <h3>
          سود شما از این خرید : <span> {formatPrice(discountedPrice)} </span>
        </h3>
        <h3>
          قیمت نهایی : <span> {formatPrice(finalPrice)} </span>
        </h3>
        <form onSubmit={handleSubmitDiscounts} className="flex gap-4">
          <input onChange={(e)=>{setDiscountsInput(e.currentTarget.value)}} className="border p-2" type="text" />
          <button className="bg-blue-700 px-4 py-2">اعمال</button>
        </form>
      </div>
    </Container>
  );
}

export default Cart;
