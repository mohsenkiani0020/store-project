import Container from "@/components/Container";
import ProductItem from "@/components/ProductItem";
import productsItem from "@/services/products";
import Link from "next/link";

async function Store() {
  const products = await productsItem.getProducts();

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
    </Container>
  );
}

export default Store;
