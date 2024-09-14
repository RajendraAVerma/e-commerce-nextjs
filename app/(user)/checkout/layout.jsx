"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useUser } from "@/lib/firestore/user/read";
import { CircularProgress } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

export default function Layout({ children }) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const productId = searchParams.get("productId");

  const { user } = useAuth();
  const { data, error, isLoading } = useUser({ uid: user?.uid });

  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (type === "cart" && (!data?.carts || data?.carts?.length === 0)) {
    return (
      <div>
        <h2>Your Cart Is Empty</h2>
      </div>
    );
  }
  if (type === "buynow" && !productId) {
    return (
      <div>
        <h2>Product Not Found!</h2>
      </div>
    );
  }
  
  return <>{children}</>;
}
