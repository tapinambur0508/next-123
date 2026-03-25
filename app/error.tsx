"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
      <h1 className="text-3xl font-bold text-red-600">ERROR</h1>
      <p className="text-gray-600">{error.message}</p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 active:bg-gray-200 transition-colors"
        >
          Reload
        </button>
      </div>
    </div>
  );
}

export default Error;
