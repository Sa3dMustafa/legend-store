import ProductCard from "@/components/products/ProductCard";
import getAllProducts from "@/lib/getAllProducts";

export default async function Home() {
  const res = await getAllProducts();
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8">
          {res.products && res.products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
  );
}
