import Link from "next/link";

import CardClient from "./Card.client";
import ProfileClient from "./Profile.client";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary"
        >
          NoteHub
        </Link>
        <ul className="flex items-center gap-1">
          <li>
            <Link
              href="/"
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover hover:text-primary"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/notes/filters/all"
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover hover:text-primary"
            >
              Notes
            </Link>
          </li>
          <li>
            <CardClient />
          </li>

          <ProfileClient />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
