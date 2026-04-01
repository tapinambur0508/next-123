import { getNote } from "@/lib/api";

import Modal from "@/components/Modal/Modal";

interface NotePreviewProps {
  params: Promise<{ id: string }>;
}

async function NotePreview({ params }: NotePreviewProps) {
  const { id } = await params;
  const response = await getNote(id);

  return (
    <Modal>
      <h3>{response.title}</h3>
      <p>{response.content}</p>
    </Modal>
  );
}

export default NotePreview;
