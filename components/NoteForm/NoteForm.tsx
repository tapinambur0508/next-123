"use client";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { createNote } from "@/lib/api";

import { useNoteDraftStore } from "@/store/noteStore";

import type { Category } from "@/types/category";

interface NoteFormProps {
  categories: Category[];
}

function NoteForm({ categories }: NoteFormProps) {
  const router = useRouter();

  const { draft, setDraft, clearDraft } = useNoteDraftStore();

  const { mutate, isPending } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      clearDraft();
      router.push("/notes/filters/all");
    },
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setDraft({ ...draft, [name]: value });
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate(draft);
  };

  return (
    <form
      className="mx-auto max-w-xl space-y-6 rounded-xl border border-border bg-surface p-8 shadow-sm"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-foreground"
        >
          Title
        </label>
        <input
          required
          type="text"
          name="title"
          id="title"
          placeholder="Give your note a title"
          className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-[color,box-shadow,border-color] placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
          value={draft.title}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="content"
          className="block text-sm font-medium text-foreground"
        >
          Content
        </label>
        <textarea
          required
          name="content"
          id="content"
          rows={8}
          placeholder="Write your thoughts…"
          className="min-h-[11rem] w-full resize-y rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm leading-relaxed text-foreground shadow-sm transition-[color,box-shadow,border-color] placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
          value={draft.content}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-foreground"
        >
          Category
        </label>
        <select
          required
          name="categoryId"
          id="category"
          className="w-full cursor-pointer rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm transition-[color,box-shadow,border-color] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25"
          value={draft.categoryId}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="border-t border-border pt-6">
        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-[10rem]"
        >
          {isPending ? "Saving…" : "Save note"}
        </button>
      </div>
    </form>
  );
}

export default NoteForm;
