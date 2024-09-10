"use client";

import AuthContextProvider from "@/contexts/AuthContext";

export default function Layout({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
