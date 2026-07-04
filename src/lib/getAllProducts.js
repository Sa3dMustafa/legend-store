async function getAllProducts() {
  const Data = await fetch("https://dummyjson.com/products");
  {
    cache: "force-cache";
  }
  const res = await Data.json();
  return res;
}
export default getAllProducts;
