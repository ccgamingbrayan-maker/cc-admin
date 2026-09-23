import { ModuleShell } from "../components/module-shell";

export default function OrdersPage() {
  return (
    <ModuleShell
      title="Órdenes"
      description="Compras realizadas por la tienda a proveedores: órdenes, preórdenes, costos, fechas de entrega y facturas."
      badge="Compras"
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
        <h3 className="text-lg font-semibold text-white">Órdenes o preórdenes</h3>
        <p className="mt-4 text-sm text-slate-400">
          Se preparará la gestión de proveedor fijo, producto, juego, set, costo, fecha, entrega estimada, factura, pagos y estado.
        </p>
      </div>
    </ModuleShell>
  );
}
