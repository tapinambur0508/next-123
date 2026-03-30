// Server component
// import Link from "next/link";

// function NotFound() {
//   return (
//     <div>
//       <h1>404 - Not Found</h1>
//       <Link href="/">Back to home</Link>
//     </div>
//   )
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timerId = setTimeout(() => {
      router.push("/");
      // window.location.href = "https://auto.ria.com/uk/";
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [router]);

  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>
        You will be redirect to home page automatically after several seconds...
      </p>
    </div>
  );
}

export default NotFound;
