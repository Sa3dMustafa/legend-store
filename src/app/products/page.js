import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import Image from "next/image";
import getAllProducts from "@/lib/getAllProducts";

export default async function Products() {
  const res = await getAllProducts();
  console.log(res);
  return (
    <div className="grid gap-4 p-8">
      {res.products && <ProductCard data={res.products} />}
    </div>
  );
}
