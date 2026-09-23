import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdminHomePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/login");
  }

  const email = data.claims.email ?? "Usuario sin email";

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-slate-100">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/60">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Private admin
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white">CC Admin</h1>
          </div>

          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-700"
            >
              Cerrar sesión
            </button>
          </form>
        </div>

        <div className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">
          <p className="text-sm text-slate-400">Usuario autenticado</p>
          <p className="mt-2 text-xl font-semibold text-white">{email}</p>
        </div>
      </div>
    </main>
  );
}
