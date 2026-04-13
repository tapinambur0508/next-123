import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Control Panel - NoteHub",
  description: "Description for Control Panel",
};

function ControlPanel() {
  return (
    <div className="rounded-xl border border-border bg-surface p-8 shadow-sm">
      <h1 className="text-3xl font-bold tracking-tight">Control panel</h1>
    </div>
  );
}

export default ControlPanel;
