"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Product({ data }) {
  console.log(data.id);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((product) => (
        <div key={product.id}>
          <Image src={product.images[0]} alt={product.title} width={200} height={200} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <Link href={`/products/${product.id}`} variant="default">
            Product Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Product;
