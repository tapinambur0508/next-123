import { getNotes } from "@/lib/api";

import NoteList from "@/components/NoteList/NoteList";

interface NotesFiltersProps {
  params: Promise<{ slug: string[] }>;
}

async function NotesFilters({ params }: NotesFiltersProps) {
  const { slug } = await params;
  const category = slug[0] === "all" ? undefined : slug[0];
  const data = await getNotes(category);

  return (
    <div>
      <h1>Notes by filters</h1>

      <NoteList notes={data.notes} />
    </div>
  );
}

export default NotesFilters;
