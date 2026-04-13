import { getNotes } from "@/lib/api";

import NoteList from "@/components/NoteList/NoteList";

interface NotesFiltersProps {
  params: Promise<{ slug: string[] }>;
}

async function NotesFilters({ params }: NotesFiltersProps) {
  const { slug } = await params;
  const category = slug[0] === "all" ? undefined : slug[0];
  const response = await getNotes(category);

  return (
    <div className="rounded-xl border border-border bg-surface p-8 shadow-sm">
      <NoteList notes={response.notes} />
    </div>
  );
}

export default NotesFilters;
