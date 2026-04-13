import type { Metadata } from "next";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";

import { getNote } from "@/lib/api";

import NoteDetailsClient from "./NoteDetails.client";

interface NoteProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: NoteProps): Promise<Metadata> {
  const { id } = await params;
  const response = await getNote(id);

  return {
    title: `${response.title} - NoteHub`,
    description: response.content,
    openGraph: {
      url: `http://localhost:3000/notes/${response.id}`,
      title: `${response.title} - NoteHub`,
      description: response.content,
      type: "article",
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/og-meta.jpg",
          width: 1200,
          height: 630,
          alt: response.title,
        },
      ],
    },
  };
}

async function Note({ params }: NoteProps) {
  const { id } = await params;

  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => getNote(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}

export default Note;
