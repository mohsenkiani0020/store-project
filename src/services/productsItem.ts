import { Products } from "@/models/products";

class ProductsItem {
  async getProducts(): Promise<Products[]> {
    const response = await fetch("http://localhost:3001/products",{next : {revalidate : 3600}});
    const data: Products[] = await response.json();
    return data;
  }
}

export default new ProductsItem();
