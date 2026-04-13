import Link from "next/link";

import { getCategories } from "@/lib/api";

async function NotesSidebar() {
  const categories = await getCategories();

  return (
    <>
      <Link
        href="/notes/actions/create"
        className="mb-4 block w-full rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Create note
      </Link>
      <ul>
        <li>
          <Link href="/notes/filters/all">All notes</Link>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/notes/filters/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NotesSidebar;
