"use client";

import { useCounterStore } from "@/store/counterStore";

const stepperBtn =
  "flex h-11 w-11 shrink-0 items-center justify-center bg-surface text-lg font-medium leading-none text-foreground transition-colors hover:bg-surface-hover focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/35 active:bg-surface-hover";

function Counter() {
  const { counter, increment, decrement, reset } = useCounterStore();

  return (
    <div className="my-8 rounded-xl border border-border bg-background/50 p-6 shadow-sm backdrop-blur-sm">
      <p className="mb-4 text-sm font-medium text-muted">Counter</p>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="inline-flex divide-x divide-border overflow-hidden rounded-lg border border-border shadow-sm"
          role="group"
          aria-label="Adjust count"
        >
          <button
            type="button"
            onClick={decrement}
            aria-label="Decrease"
            className={stepperBtn}
          >
            −
          </button>
          <span
            className="flex min-w-[5rem] items-center justify-center bg-background px-4 py-2 font-mono text-2xl font-semibold tabular-nums tracking-tight text-foreground"
            aria-live="polite"
          >
            {counter}
          </span>
          <button
            type="button"
            onClick={increment}
            aria-label="Increase"
            className={stepperBtn}
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:self-center"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
