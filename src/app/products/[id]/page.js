import { notFound } from "next/navigation";
import ProImage from "@/components/productDetails/ProImage";
import ProInfo from "@/components/productDetails/ProInfo";
import ProDescription from "@/components/productDetails/ProDescription";

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
    notFound("Product not found");
  }

  const product = await response.json();

  return (
    <div className="container mx-auto p-10">
      <div className="grid lg:grid-cols-2 gap-10">
        <ProImage product={product} />
        <div>
          <ProInfo product={product} />
          <ProDescription product={product} />
        </div>
      </div>
    </div>
  );
}
