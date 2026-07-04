import React from "react";
import { Card, CardContent } from "../ui/card";
import { TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Tabs } from "../ui/tabs";

function ProDescription({ product }) {
  return (
    <Tabs defaultValue="description" className="mt-16">
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>

      <TabsContent value="description">
        <Card>
          <CardContent className="p-6">{product.description}</CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="specifications">
        <Card>
          <CardContent className="space-y-3 p-6">
            <p>Brand : {product.brand}</p>
            <p>Category : {product.category}</p>
            <p>Stock : {product.stock}</p>
            <p>Minimum Order : {product.minimumOrderQuantity}</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="reviews">
        <div className="space-y-4">
          {product.reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div>
                    <h3 className="font-semibold">{review.reviewerName}</h3>
                    <p>⭐ {review.rating}</p>
                    <p className="text-muted-foreground mt-2">
                      {review.comment}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default ProDescription;
