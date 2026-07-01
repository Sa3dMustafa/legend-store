import Categories from "@/components/categories/Categories";
import { CategoriesMenu } from "@/components/categories/CategoriseMenu";
import React from "react";

async function page() {
    
  const response = await fetch("https://dummyjson.com/products/categories");
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <Categories data={data} />
      <CategoriesMenu data={data} />
    </div>
  );
}

export default page;
