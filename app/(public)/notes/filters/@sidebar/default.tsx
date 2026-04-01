import Link from "next/link";

import { getCategories } from "@/lib/api";

async function NotesSidebar() {
  const categories = await getCategories();

  return (
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
  );
}

export default NotesSidebar;
