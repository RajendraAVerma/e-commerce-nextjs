import { db } from "@/lib/firebase";
import { deleteDoc, doc, setDoc, Timestamp } from "firebase/firestore";

export const addReview = async ({
  uid,
  rating,
  message,
  productId,
  displayName,
  photoURL,
}) => {
  const ref = doc(db, `products/${productId}/reviews/${uid}`);
  await setDoc(ref, {
    rating: rating ?? "",
    message: message ?? "",
    productId: productId ?? "",
    uid: uid ?? "",
    displayName: displayName ?? "",
    photoURL: photoURL ?? "",
    timestamp: Timestamp.now(),
  });
};

export const deleteReview = async ({ productId, uid }) => {
  await deleteDoc(doc(db, `products/${productId}/reviews/${uid}`));
};
