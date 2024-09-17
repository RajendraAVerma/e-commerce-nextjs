"use client";

import { db } from "@/lib/firebase";
import {
  average,
  collection,
  count,
  getAggregateFromServer,
  getCountFromServer,
  sum,
} from "firebase/firestore";
import useSWR from "swr";

export const getOrdersCounts = async () => {
  const ref = collection(db, `orders`);
  const data = await getAggregateFromServer(ref, {
    totalRevenue: sum("payment.amount"),
    totalOrders: count(),
  });
  return data.data();
};

export function useOrdersCounts() {
  const { data, error, isLoading } = useSWR("ordrs_counts", (key) =>
    getOrdersCounts()
  );
  if (error) {
    console.log(error?.message);
  }
  return { data, error, isLoading };
}
