import { ModuleShell } from "../components/module-shell";

export default function ReportsPage() {
  return (
    <ModuleShell
      title="Reportes"
      description="Indicadores por día, semana, mes y año para finanzas, cobranzas, órdenes y próximos eventos."
      badge="Analytics"
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
        <h3 className="text-lg font-semibold text-white">Resumen ejecutivo</h3>
        <p className="mt-4 text-sm text-slate-400">
          Aquí se mostrarán ingresos, gastos, ganancia estimada, cobro pendiente, reportes y tablas sencillas.
        </p>
      </div>
    </ModuleShell>
  );
}
