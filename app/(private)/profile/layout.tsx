import type {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profile"
}

interface ProfileLayoutProps {
  children: React.ReactNode;
}

function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <aside className="shrink-0 md:w-52">
        <nav className="sticky top-24 rounded-xl border border-border bg-surface p-2 shadow-sm">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="/profile"
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover hover:text-primary"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/profile/notifications"
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover hover:text-primary"
              >
                Notifications
              </Link>
            </li>
            <li>
              <Link
                href="/profile/settings"
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover hover:text-primary"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="min-w-0 flex-1 md:border-l md:border-border md:pl-6">
        {children}
      </div>
    </div>
  );
}

export default ProfileLayout;
