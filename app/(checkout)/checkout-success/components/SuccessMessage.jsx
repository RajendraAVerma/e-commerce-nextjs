"use client";

import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function SuccessMessage() {
  useEffect(() => {
    confetti();
  }, []);
  return <></>;
}
