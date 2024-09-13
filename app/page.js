import { getFeaturedProducts } from "@/lib/firestore/products/read_server";
import Header from "./components/Header";
import FeaturedProductSlider from "./components/Sliders";
import Collections from "./components/Collections";
import { getCollections } from "@/lib/firestore/collections/read_server";
import Categories from "./components/Categories";
import { getCategories } from "@/lib/firestore/categories/read_server";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();
  const collections = await getCollections();
  const categories = await getCategories();

  return (
    <main className="w-screen">
      <section className="flex flex-col overflow-x-hidden">
        <Header />
        <FeaturedProductSlider featuredProducts={featuredProducts} />
        {/* <Collections collections={collections} /> */}
        <Categories categories={categories} />
      </section>
    </main>
  );
}
