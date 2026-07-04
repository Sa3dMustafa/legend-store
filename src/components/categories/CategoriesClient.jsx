"use client";

import { useEffect, useState } from "react";
import Categorybox from "./Categorybox";
import ProductCard from "../products/ProductCard";
import getProductsByCategorey from "@/lib/getProductsByCategorey";
export default function CategoriesClient({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].slug);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getProductsByCategorey(selectedCategory);

      setProducts(data.products);
    }

    load();
  }, [selectedCategory]);

  return (
    <>
      <div className="flex flex-col gap-4 p-8">
        <Categorybox
          categories={categories}
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        />
        <ProductCard data={products} />
      </div>
    </>
  );
}
