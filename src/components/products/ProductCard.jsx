"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";

export default function Product({ data }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((product) => (
        <Card
          key={product.id}
          className="group overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gray-50">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-contain p-5 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <CardContent className="space-y-4 p-5">
            <h2 className="line-clamp-1 text-lg font-semibold">
              {product.title}
            </h2>
            <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-primary">
                ${product.price}
              </span>
              <Badge variant="secondary">⭐ {product.rating}</Badge>
            </div>
            <Badge
              variant={product.stock ? "default" : "destructive"}
              className="rounded-full"
            >
              {product.stock} in stock
            </Badge>
          </CardContent>

          <CardFooter className="pt-0 pb-5 px-5">
            <Button asChild className="w-full rounded-xl">
              <Link href={`/products/${product.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
