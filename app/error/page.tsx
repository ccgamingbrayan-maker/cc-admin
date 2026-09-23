type ErrorPageProps = {
  searchParams?: Promise<{ message?: string }>;
};

export default async function ErrorPage({ searchParams }: ErrorPageProps) {
  const params = (await searchParams) ?? {};
  const message = params.message ?? "Ocurrió un error inesperado.";

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-slate-100">
      <div className="w-full max-w-lg rounded-2xl border border-red-500/30 bg-slate-900 p-8 text-center shadow-xl shadow-red-950/30">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
          Error
        </p>
        <h1 className="mt-4 text-3xl font-bold text-white">No se pudo continuar</h1>
        <p className="mt-4 text-base text-slate-300">{message}</p>
        <a
          href="/login"
          className="mt-6 inline-flex rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Volver al login
        </a>
      </div>
    </main>
  );
}
