import NoteForm from "@/components/NoteForm/NoteForm";

import { getCategories } from "@/lib/api";

async function CreateNote() {
  const categories = await getCategories();

  return (
    <>
      <h1>Create Note</h1>

      <NoteForm categories={categories} />
    </>
  );
}

export default CreateNote;
