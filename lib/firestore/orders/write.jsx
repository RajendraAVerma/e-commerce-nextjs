import { db } from "@/lib/firebase";
import { doc, Timestamp, updateDoc } from "firebase/firestore";

export const updateOrderStatus = async ({ id, status }) => {
  await updateDoc(doc(db, `orders/${id}`), {
    status: status,
    timestampStatusUpdate: Timestamp.now(),
  });
};
