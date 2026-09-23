import { ModuleShell } from "../components/module-shell";

export default function PresalesPage() {
  return (
    <ModuleShell
      title="Preventas"
      description="Controla preventas, saldo, clientes, releases y seguimiento de facturas pendientes."
      badge="Preventas"
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
        <h3 className="text-lg font-semibold text-white">Preventas activas</h3>
        <p className="mt-4 text-sm text-slate-400">
          Aquí se gestionarán juego, producto, set, fecha de release, precio de compra, venta, cantidad, cliente, abono, saldo y estado.
        </p>
      </div>
    </ModuleShell>
  );
}
