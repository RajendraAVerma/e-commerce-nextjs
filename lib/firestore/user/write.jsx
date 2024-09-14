import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export const updateFavorites = async ({ uid, list }) => {
  await setDoc(
    doc(db, `users/${uid}`),
    {
      favorites: list,
    },
    {
      merge: true,
    }
  );
};

export const updateCarts = async ({ uid, list }) => {
  await setDoc(
    doc(db, `users/${uid}`),
    {
      carts: list,
    },
    {
      merge: true,
    }
  );
};
