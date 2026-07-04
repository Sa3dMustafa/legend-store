import ProductCard from "@/components/products/ProductCard";
import getAllProducts from "@/lib/getAllProducts";

export default async function Home() {
  const res = await getAllProducts();
  return (
    <div className="grid gap-4 p-8">
      {res.products && <ProductCard data={res.products} />}
    </div>
  );
}
