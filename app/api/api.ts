import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";

import type { User } from "@/types/user";

export type APIError = AxiosError<{ error: string }>;

export const api = axios.create({
  baseURL: "https://next-v1-notes-api.goit.study",
  withCredentials: true,
});

export const getServerMe = async (): Promise<User> => {
  const cookieStore = await cookies();

  const { data } = await api.get("/auth/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return data;
};
