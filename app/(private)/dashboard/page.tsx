import { ModuleShell } from "../components/module-shell";

const cards = [
  { label: "Ingresos", value: "COP 0", accent: "text-emerald-300" },
  { label: "Gastos", value: "COP 0", accent: "text-rose-300" },
  { label: "Ganancia estimada", value: "COP 0", accent: "text-cyan-300" },
  { label: "Cobranza pendiente", value: "COP 0", accent: "text-amber-300" },
];

export default function DashboardPage() {
  return (
    <ModuleShell
      title="Dashboard"
      description="Resumen operativo del negocio, indicadores clave y próximos eventos del negocio de cartas coleccionables."
      badge="Resumen"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5"
          >
            <p className="text-sm text-slate-400">{card.label}</p>
            <p className={`mt-4 text-2xl font-bold ${card.accent}`}>{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <h3 className="text-lg font-semibold text-white">Próximos torneos</h3>
          <p className="mt-4 text-sm text-slate-400">
            Aún no existen torneos registrados para esta vista.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <h3 className="text-lg font-semibold text-white">Próximos releases</h3>
          <p className="mt-4 text-sm text-slate-400">
            Aún no hay release programado para mostrar.
          </p>
        </div>
      </div>
    </ModuleShell>
  );
}
