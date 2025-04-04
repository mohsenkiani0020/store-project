import { Products } from "@/models/productsModel";

class ProductsItem {
  async getProducts(): Promise<Products[]> {
    const response = await fetch("http://localhost:3001/products");
    const data: Products[] = await response.json();
    return data;
  }

  async getProductsItems(id: string): Promise<Products> {
    const response = await fetch(`http://localhost:3001/products/${id}`);
    const data: Products = await response.json();
    return data;
  }
}

export default new ProductsItem();
