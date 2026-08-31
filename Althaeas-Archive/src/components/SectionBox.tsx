import type { ReactNode } from "react";

interface SectionBoxProps {
  title: string;
  children: ReactNode;
}

export default function SectionBox({ title, children }: SectionBoxProps) {
  return (
    <div className="border border-neutral-400 rounded-sm overflow-hidden shadow-sm">
      <div className="bg-neutral-400 text-neutral-800 text-sm font-medium font-heading px-3 py-1.5">
        {title}
      </div>
      <div className="bg-neutral-100 p-3 min-h-[100px]">{children}</div>
    </div>
  );
}