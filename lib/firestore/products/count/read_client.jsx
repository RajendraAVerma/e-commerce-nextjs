"use client";

import { db } from "@/lib/firebase";
import {
  average,
  collection,
  count,
  getAggregateFromServer,
  getCountFromServer,
} from "firebase/firestore";
import useSWR from "swr";

export const getProductsCount = async () => {
  const ref = collection(db, `products`);
  const data = await getCountFromServer(ref);
  return data.data().count;
};

export function useProductCount() {
  const { data, error, isLoading } = useSWR("products_count", (key) =>
    getProductsCount()
  );
  if (error) {
    console.log(error?.message);
  }
  return { data, error, isLoading };
}
