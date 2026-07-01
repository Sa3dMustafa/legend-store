import { Button } from "@/components/ui/button";
import ProductCard from "@/components/productsComponent/ProductCard";
import Image from "next/image";

export default async function Products() {
  const Data = await fetch("https://dummyjson.com/products");
  const res = await Data.json();
  console.log(res); 
  return (
    <div className="grid gap-4">
      {res.products && <ProductCard data={res.products} />}
    </div>
  );
}
