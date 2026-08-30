import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-100 flex justify-center py-8 px-4">
      <div className="w-full max-w-4xl border border-neutral-400 shadow-sm bg-white">
        <div className="h-8 bg-neutral-400 flex items-center justify-end gap-1 px-2">
          <div className="w-3 h-3 bg-neutral-200 rounded-sm" />
          <div className="w-3 h-3 bg-neutral-200 rounded-sm" />
          <div className="w-3 h-3 bg-neutral-200 rounded-sm" />
        </div>

        {/* site title */}
        <div className="px-6 py-3 border-b border-neutral-300">
          <h1 className="text-red-900 font-serif italic text-lg">
            [name]'s Archive
          </h1>
        </div>

        {/* accent bar, matches the maroon strip under the 'site' title */}
        <div className="h-3 bg-red-900" />

        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
