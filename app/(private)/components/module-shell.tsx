import type { ReactNode } from "react";

type ModuleShellProps = {
  title: string;
  description: string;
  badge?: string;
  children: ReactNode;
};

export function ModuleShell({
  title,
  description,
  badge = "Estado vació",
  children,
}: ModuleShellProps) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 border-b border-slate-800 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
            {badge}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
        </div>
        <p className="max-w-2xl text-sm text-slate-400">{description}</p>
      </div>

      {children}
    </section>
  );
}
