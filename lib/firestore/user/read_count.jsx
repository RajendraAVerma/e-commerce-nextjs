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

export const getUsersCount = async () => {
  const ref = collection(db, `users`);
  const data = await getCountFromServer(ref);
  return data.data().count;
};

export function useUsersCount() {
  const { data, error, isLoading } = useSWR("users_count", (key) =>
    getUsersCount()
  );
  if (error) {
    console.log(error?.message);
  }
  return { data, error, isLoading };
}
