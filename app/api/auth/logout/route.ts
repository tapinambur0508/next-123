import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { api } from "../../api";
import type { APIError } from "../../api";

export async function POST() {
  try {
    const cookieStore = await cookies();

    await api.post("/auth/logout", {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");

    return NextResponse.json({ message: "Logged out successfully" });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as APIError).response?.data?.error ??
          (error as APIError).message,
      },
      {
        status: (error as APIError).status,
      },
    );
  }
}
