async function getAllCategores() {
  const Data = await fetch("https://dummyjson.com/products/categories",
    { cache: "force-cache" }
  );
  const res = await Data.json();
  return res;
}
export default getAllCategores;
