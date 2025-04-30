import { DiscountsModel } from "@/models/discountsModel";

class Discounts {
  async getDiscounts(code: string): Promise<DiscountsModel[]> {
    try {
      const response = await fetch(`http://localhost:3001/discounts?code=${encodeURIComponent(code)}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch discount. Status: ${response.status}`);
      }

      const data: DiscountsModel[] = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching discount:", error);
      return [];
    }
  }
}

export default new Discounts();
