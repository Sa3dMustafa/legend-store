"use client";

import { useEffect, useState } from "react";
import Categorybox from "./Categorybox";
import ProductCard from "../products/ProductCard";
import getProductsByCategorey from "@/lib/getProductsByCategorey";

export default function CategoriesClient({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(categories?.[0]?.slug);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getProductsByCategorey(selectedCategory);
      setProducts(data.products);
    }

    load();
  }, [selectedCategory]);

  return (
    <div className="flex flex-col gap-8 p-8">
      <Categorybox
        categories={categories}
        value={selectedCategory}
        onValueChange={setSelectedCategory}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            data={product}
          />
        ))}
      </div>
    </div>
  );
}