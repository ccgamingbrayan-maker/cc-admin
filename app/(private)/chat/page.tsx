import { ModuleShell } from "../components/module-shell";

export default function ChatPage() {
  return (
    <ModuleShell
      title="Chat IA"
      description="Interfaz reservada para asistente inteligente futuro del panel administrativo."
      badge="Futuro"
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
        <h3 className="text-lg font-semibold text-white">Chat IA pendiente de configuración</h3>
        <p className="mt-4 text-sm text-slate-400">
          Esta vista está lista visualmente para integrar futuras capacidades con IA, sin conectar aún ninguna API externa.
        </p>
      </div>
    </ModuleShell>
  );
}
