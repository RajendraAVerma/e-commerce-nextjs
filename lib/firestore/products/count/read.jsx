import { db } from "@/lib/firebase";
import {
  average,
  collection,
  count,
  getAggregateFromServer,
} from "firebase/firestore";

export const getProductReviewCounts = async ({ productId }) => {
  const ref = collection(db, `products/${productId}/reviews`);
  const data = await getAggregateFromServer(ref, {
    totalReviews: count(),
    averageRating: average("rating"),
  });
  return data.data();
};
