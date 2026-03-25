"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { getNote } from "@/lib/api";

function NoteDetailsClient() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  const { data } = useQuery({
    queryKey: ["note", id],
    queryFn: () => getNote(id),
    refetchOnMount: false,
  });

  const toggleEdit = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit);
  };

  return (
    <>
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
