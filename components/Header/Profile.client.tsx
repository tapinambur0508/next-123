"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/api";

import { useAuthStore } from "@/store/authStore";

function LogoutClient() {
  const router = useRouter();

  const { user, isAuthenticated, clearIsAuthenticated } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    clearIsAuthenticated();
    router.push("/sign-in");
  };

  if (isAuthenticated !== true) {
    return (
      <>
        <li>
          <Link
            href="/sign-in"
            className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover hover:text-primary"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            href="/sign-up"
            className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover hover:text-primary"
          >
            Register
          </Link>
        </li>
      </>
    );
  }

  return (
    <li className="flex items-center gap-4">
      <Link href="/profile">{user?.email}</Link>
      <button onClick={handleLogout}>Logout</button>
    </li>
  );
}

export default LogoutClient;
