export interface Note {
  id: string;
  title: string;
  content: string;
  category: {
    id: string;
    name: string;
  };
  createdAt: string;
}

export interface NewNotePayload {
  title: string;
  content: string;
  categoryId: string;
}
