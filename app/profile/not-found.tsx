import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <Link href="/profile">Back to profile</Link>
    </div>
  );
}

export default NotFound;
