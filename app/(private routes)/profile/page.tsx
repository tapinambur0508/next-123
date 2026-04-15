import { getServerMe } from "@/app/api/api";

async function Profile() {
  const user = await getServerMe();

  return (
    <div className="rounded-xl border border-border bg-surface p-8 shadow-sm">
      <h1 className="text-3xl font-bold tracking-tight">{user.email}</h1>
    </div>
  );
}

export default Profile;
