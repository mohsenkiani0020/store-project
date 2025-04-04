import { DiscountsModel } from "@/models/discountsModel";


class Discounts {
  async getDiscounts(code : string): Promise<DiscountsModel[]> {
    const response = await fetch(`http://localhost:3001/discounts?code=${code}`);
    const data: DiscountsModel[] = await response.json();
    return data;
  }
}

export default new Discounts();
