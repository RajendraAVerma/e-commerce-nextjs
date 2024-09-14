"use client";

import { db } from "@/lib/firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";
import useSWRSubscription from "swr/subscription";

export function useUser({ uid }) {
  const { data, error } = useSWRSubscription(
    ["users", uid],
    ([path, uid], { next }) => {
      const ref = doc(db, `users/${uid}`);
      const unsub = onSnapshot(
        ref,
        (snapshot) => next(null, snapshot.exists() ? snapshot.data() : null),
        (err) => next(err, null)
      );
      return () => unsub();
    }
  );

  return { data, error: error?.message, isLoading: data === undefined };
}
