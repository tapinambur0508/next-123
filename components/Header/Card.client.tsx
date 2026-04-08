"use client";

import { useCounterStore } from "@/store/counterStore";

function CardClient() {
  const { counter } = useCounterStore();

  return (
    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-dark">
      Cart ({counter})
    </button>
  );
}

export default CardClient;
