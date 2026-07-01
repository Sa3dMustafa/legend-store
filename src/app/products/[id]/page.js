import Image from "next/image";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { id } = await params;

  // fetch data
  const product = await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => res.json(),
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: [`${product.thumbnail}`, ...previousImages],
    },
  };
}

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    notFound();
  }

  const product = await response.json();

  return (
    <div className="container mx-auto py-10">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* شمال */}

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

        {/* يمسن */}

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

            <Badge variant="destructive">
              {product.discountPercentage}% OFF
            </Badge>
          </div>

          <div className="flex gap-3 mt-6">
            <Badge variant={product.stock > 0 ? "default" : "destructive"}>
              {product.stock > 0 ? "In Stock" : "Out Of Stock"}
            </Badge>

            <Badge variant="outline">⭐ {product.rating}</Badge>
          </div>

          <Separator className="my-8" />

          <div className="space-y-3">
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
              <span className="font-semibold">Return:</span>{" "}
              {product.returnPolicy}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <Button size="lg">Add To Cart</Button>

            <Button variant="outline" size="lg">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

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

              <p>Width : {product.dimensions.width}</p>

              <p>Height : {product.dimensions.height}</p>

              <p>Depth : {product.dimensions.depth}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="space-y-4">
            {product.reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarFallback>{review.reviewerName[0]}</AvatarFallback>
                    </Avatar>

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
    </div>
  );
}
