export default async function getProductsByCategorey(category) {
  const response = await fetch(`https://dummyjson.com/products/category/${category}`,
    { cache: "force-cache" });
  const data = await response.json();
  return data;
}
