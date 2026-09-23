import { ModuleShell } from "../components/module-shell";

export default function CustomersPage() {
  return (
    <ModuleShell
      title="Clientes"
      description="Gestiona clientes, deudas, abonos, fechas límite, estados y seguimiento del pago de torneos."
      badge="Deudas"
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
        <h3 className="text-lg font-semibold text-white">Listado de clientes</h3>
        <p className="mt-4 text-sm text-slate-400">
          Aquí se registrarán nombres, teléfono, email, concepto, valor total, abono, saldo, fecha límite, estado y notas.
        </p>
      </div>
    </ModuleShell>
  );
}
