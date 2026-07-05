"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";

export default function ProductCard({ data }) {
  const product = data;

  return (
    <Card className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#008bed] hover:shadow-[0_20px_50px_rgba(0,139,237,0.18)]">
      {/* Image */}
      <div className="relative flex h-60 items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-100">
        <Image
          src={product.images?.[0] ?? product.thumbnail}
          alt={product.title}
          fill
          className="object-contain p-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-4 top-4 rounded-full bg-[#008bed] px-3 py-1 text-white shadow-md">
            -{Math.round(product.discountPercentage)}%
          </Badge>
        )}

        {product.rating >= 4.8 && (
          <Badge className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-white shadow-md">
            Best Seller
          </Badge>
        )}
      </div>

      {/* Content */}
      <CardContent className="space-y-5 p-6">
        <div>
          <h2 className="line-clamp-1 text-xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-[#008bed]">
            {product.title}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
            {product.description}
          </p>
        </div>

        {/* Price & Rating */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-extrabold text-[#008bed]">
              ${product.price}
            </p>

            <p className="text-xs text-slate-400">
              Free Shipping
            </p>
          </div>

          <Badge className="rounded-full bg-amber-100 px-3 py-1 text-amber-700 hover:bg-amber-100">
            ⭐ {product.rating}
          </Badge>
        </div>

        {/* Stock */}
        <div className="flex items-center justify-between">
          <Badge
            className={`rounded-full px-4 py-1 ${
              product.stock > 0
                ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                : "bg-red-100 text-red-600 hover:bg-red-100"
            }`}
          >
            {product.stock > 0
              ? `${product.stock} In Stock`
              : "Out of Stock"}
          </Badge>

          <span className="text-sm text-slate-500 capitalize">
            {product.category}
          </span>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-center items-center">
        <Button
          asChild
          className="h-11 w-full rounded-xl bg-[#008bed] text-base font-semibold text-white transition-all duration-300 hover:bg-[#0077cc] hover:shadow-lg hover:shadow-[#008bed]/30"
        >
          <Link href={`/products/${product.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}