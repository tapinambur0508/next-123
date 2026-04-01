import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-primary"
        >
          Next App
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
            <Link
              href="/profile"
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover hover:text-primary"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/control-panel"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-dark"
            >
              Control panel
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
