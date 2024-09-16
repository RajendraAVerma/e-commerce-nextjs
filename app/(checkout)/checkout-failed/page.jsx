import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { adminDB } from "@/lib/firebase_admin";
import Link from "next/link";

const fetchCheckout = async (checkoutId) => {
  const list = await adminDB
    .collectionGroup("checkout_sessions")
    .where("id", "==", checkoutId)
    .get();
  if (list.docs.length === 0) {
    throw new Error("Invalid Checkout ID");
  }
  return list.docs[0].data();
};

export default async function Page({ searchParams }) {
  const { checkout_id } = searchParams;
  const checkout = await fetchCheckout(checkout_id);
  return (
    <main>
      <Header />
      <section className="min-h-screen flex flex-col gap-3 justify-center items-center">
        <div className="flex justify-center w-full">
          <img src="/svgs/Mobile payments-rafiki.svg" className="h-48" alt="" />
        </div>
        <h1 className="text-2xl font-semibold">Your Payment Was Not Success</h1>
        <div className="flex items-center gap-4 text-sm">
          <Link href={"/"}>
            <button className="text-blue-600 border border-blue-600 px-5 py-2 rounded-lg bg-white">
              Shop
            </button>
          </Link>
          <Link href={checkout?.url}>
            <button className="bg-blue-600 border px-5 py-2 rounded-lg text-white">
              Retry
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
