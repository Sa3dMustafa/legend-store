import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

function ProInfo({ product }) {
  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Badge>{product.category}</Badge>

        <Badge variant="secondary">{product.brand}</Badge>
      </div>

      <h1 className="text-4xl font-bold">{product.title}</h1>

      <p className="text-muted-foreground mt-3">{product.description}</p>

      <div className="flex items-center gap-3 mt-6">
        <span className="text-4xl font-bold text-primary">
          ${product.price}
        </span>

        <Badge variant="destructive">{product.discountPercentage}% OFF</Badge>
      </div>

      <div className="flex gap-3 mt-6">
        <Badge variant={product.stock > 0 ? "default" : "destructive"}>
          {product.stock > 0 ? "In Stock" : "Out Of Stock"}
        </Badge>

        <Badge variant="outline">⭐ {product.rating}</Badge>
      </div>

      <Separator className="my-8" />

      <div className="space-y-3 flex ">
        <p>
          <span className="font-semibold">Weight:</span> {product.weight} g
        </p>

        <p>
          <span className="font-semibold">Shipping:</span>{" "}
          {product.shippingInformation}
        </p>

        <p>
          <span className="font-semibold">Warranty:</span>{" "}
          {product.warrantyInformation}
        </p>

        <p>
          <span className="font-semibold">Return:</span> {product.returnPolicy}
        </p>
      </div>
    </div>
  );
}

export default ProInfo;
