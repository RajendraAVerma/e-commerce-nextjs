"use client";

import Form from "./components/Form";
import ListView from "./components/ListView";

export default function Page() {
  return (
    <main className="p-5 flex flex-col md:flex-row gap-5">
      <Form />
      <ListView />
    </main>
  );
}
