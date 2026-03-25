import { getNotes } from "@/lib/api";

import NoteList from "@/components/NoteList/NoteList";

async function Notes() {
  const response = await getNotes();

  return (
    <div className="rounded-xl border border-border bg-surface p-8 shadow-sm">
      <h1 className="text-3xl font-bold tracking-tight">Notes</h1>

      <NoteList notes={response.notes} />
    </div>
  );
}

export default Notes;
