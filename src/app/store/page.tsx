import Container from "@/components/Container";
import Paginate from "@/components/Paginate";
import ProductItem from "@/components/ProductItem";
import { GetParams } from "@/models/paramsModel";
import productsItem from "@/services/products";
import Link from "next/link";

async function Store({searchParams}: GetParams) {

  const { page = "1" , limit = "5" } = await searchParams;
  const products = await productsItem.getProducts(page,limit);
  

  return (
    <Container>
      <h1 className="my-4">فروشگاه</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((item) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
      <Paginate/>
    </Container>
  );
}

export default Store;
