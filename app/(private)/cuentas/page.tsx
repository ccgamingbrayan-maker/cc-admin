import { ModuleShell } from "../components/module-shell";

export default function AccountsPage() {
  return (
    <ModuleShell
      title="Cuentas"
      description="Registra ingresos, gastos, pagos recibidos, pagos pendientes y movimientos del negocio."
      badge="Finanzas"
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
        <div className="flex items-center justify-between gap-3 pb-4">
          <h3 className="text-lg font-semibold text-white">Movimientos</h3>
          <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-200">
            COP
          </span>
        </div>

        <p className="text-sm text-slate-400">
          Este módulo está preparado para registrar ingresos, gastos, pagos recibidos y pendientes con concepto, categoría, fecha, valor, método de pago y notas.
        </p>
      </div>
    </ModuleShell>
  );
}
