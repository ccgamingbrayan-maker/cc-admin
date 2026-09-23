import { ModuleShell } from "../components/module-shell";

export default function TournamentsPage() {
  return (
    <ModuleShell
      title="Torneos"
      description="Administra eventos, inscripción, participantes, pagos, deudas, premios, gastos y estado del torneo."
      badge="Eventos"
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
        <h3 className="text-lg font-semibold text-white">Próximos torneos</h3>
        <p className="mt-4 text-sm text-slate-400">
          Se preparará el registro de nombre, juego, fecha, lugar, inscripción, participantes, pagos, deudas, premios y ganancia.
        </p>
      </div>
    </ModuleShell>
  );
}
