import Image from "next/image";
import React from "react";
import { Card, CardContent } from "../ui/card";

function ProImage({ product }) {
  return (
    <Card>
      <CardContent className="p-6">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={600}
          height={600}
          className="rounded-xl w-full object-cover"
        />

        <div className="flex gap-3 mt-4 overflow-auto">
          {product.images.map((image) => (
            <Image
              key={image}
              src={image}
              alt={product.title}
              width={80}
              height={80}
              className="rounded-lg border cursor-pointer"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProImage;
