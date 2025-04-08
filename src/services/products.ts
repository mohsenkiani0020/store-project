import { Products } from "@/models/productsModel";
import axios from "axios";

class ProductsItem {
  private axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // async getProducts(page: string, perPage: string , title : string): Promise<Products[]> {
  //   try {
  //     const response = await this.axiosInstance.get<Products[]>(
  //       `/products?_page=${page}&_limit=${perPage}&title=${title}`
  //     );
      
      
  //     return response.data;
  //   } catch (error) {
  //     throw new Error("Failed to get products");
  //   }
  // }

  async getProducts(page: string, perPage: string, title?: string): Promise<Products[]> {
    try {
      let url = `/products?_page=${page}&_limit=${perPage}`;
  
      if (title && title.trim() !== "") {
        url += `&title=${encodeURIComponent(title)}`;
      }
  
      const response = await this.axiosInstance.get<Products[]>(url);
      return response.data;
  
    } catch (error) {
      throw new Error("Failed to get products");
    }
  }
  

  async getProductsItems(id: string): Promise<Products> {
    try {
      const response = await this.axiosInstance.get<Products>(
        `/products/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get product with id: ${id}`);
    }
  }

  async postProduct(product: Products): Promise<Products> {
    try {
      const response = await this.axiosInstance.post<Products>(
        "/products",
        product
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to post product");
    }
  }
}

export default new ProductsItem();
