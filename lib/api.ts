import axios from "axios";

import type { Note, NewNotePayload } from "@/types/note";
import type { Category } from "@/types/category";
import type { RegisterRequest, LoginRequest } from "@/types/auth";
import type { User } from "@/types/user";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export async function getNotes(categoryId?: string) {
  const { data } = await API.get<{ notes: Note[]; total: number }>("/notes", {
    params: {
      categoryId,
    },
  });
  return data;
}

export async function getNote(id: Note["id"]) {
  const { data } = await API.get<Note>(`/notes/${id}`);
  return data;
}

export async function getCategories() {
  const { data } = await axios.get<Category[]>("/categories");
  return data;
}

export async function createNote(payload: NewNotePayload) {
  const { data } = await API.post<Note>("/notes", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}

export const register = async (data: RegisterRequest) => {
  const res = await API.post<User>("/auth/register", data);
  return res.data;
};

export const login = async (data: LoginRequest) => {
  const res = await API.post<User>("/auth/login", data);
  return res.data;
};

export const logout = async () => {
  await API.post<User>("/auth/logout");
};
