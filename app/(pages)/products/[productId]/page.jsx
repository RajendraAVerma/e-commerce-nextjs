import { getProduct } from "@/lib/firestore/products/read_server";
import Photos from "./components/Photos";
import Details from "./components/Details";
import Reviews from "./components/Reviews";
import RelatedProducts from "./components/RelatedProducts";

export default async function Page({ params }) {
  const { productId } = params;
  const product = await getProduct({ id: productId });
  return (
    <main className="p-5 md:p-10">
      <section className="flex flex-col-reverse md:flex-row gap-3">
        <Photos
          imageList={[product?.featureImageURL, ...(product?.imageList ?? [])]}
        />
        <Details product={product} />
      </section>
      <Reviews productId={productId} />
      <RelatedProducts categoryId={product?.categoryId} />
    </main>
  );
}
