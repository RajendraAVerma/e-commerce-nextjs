"use client";

import { db } from "@/lib/firebase";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
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

export function useUsers() {
  const { data, error } = useSWRSubscription(["users"], ([path], { next }) => {
    const q = query(collection(db, path), orderBy("timestampCreate", "desc"));
    const unsub = onSnapshot(
      q,
      (snapshot) =>
        next(
          null,
          snapshot.docs.length === 0
            ? null
            : snapshot.docs.map((snap) => snap.data())
        ),
      (err) => next(err, null)
    );
    return () => unsub();
  });

  return { data, error: error?.message, isLoading: data === undefined };
}
