import CategoriesClient from "@/components/categories/CategoriesClient";
import getAllCategores from "@/lib/getAllCategores";

export default async function Page() {

    const categories = await getAllCategores();

    return (
        <CategoriesClient categories={categories}/>
    )

}