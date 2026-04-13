"use client";

import { logout } from "@/lib/api";

function LogoutClient() {
  return <button onClick={logout}>Logout</button>;
}

export default LogoutClient;
