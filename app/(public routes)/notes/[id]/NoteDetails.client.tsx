"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { getNote } from "@/lib/api";

function NoteDetailsClient() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getNote(id),
    refetchOnMount: false,
  });

  const toggleEdit = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit);
  };

  const handleBack = () => {
    router.back();
  };

  console.log({ data });

  return (
    <>
      <button onClick={handleBack}>Back</button>
      <button onClick={toggleEdit}>Edit</button>

      {isEdit ? (
        <form>
          <div>
            <input placeholder="Title" />
          </div>
          <div>
            <textarea placeholder="Content" />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <h1>{data?.title}</h1>
          <p>{data?.content}</p>
        </>
      )}
    </>
  );
}

export default NoteDetailsClient;
