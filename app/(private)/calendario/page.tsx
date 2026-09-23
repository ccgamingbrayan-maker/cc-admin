import { ModuleShell } from "../components/module-shell";

export default function CalendarPage() {
  return (
    <ModuleShell
      title="Calendario"
      description="Organiza torneos, releases, pagos, entregas, vencimientos y recordatorios del negocio."
      badge="Agenda"
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
        <h3 className="text-lg font-semibold text-white">Próximos eventos</h3>
        <p className="mt-4 text-sm text-slate-400">
          Estructura lista para eventos de torneos, releases, facturas, pagos y entregas sin integrar servicios externos.
        </p>
      </div>
    </ModuleShell>
  );
}
