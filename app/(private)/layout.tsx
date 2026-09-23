import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const AUTHORIZED_EMAIL = "ccgamingbrayan@gmail.com";

const navigation = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/cuentas", label: "Cuentas" },
  { href: "/clientes", label: "Clientes" },
  { href: "/torneos", label: "Torneos" },
  { href: "/preventas", label: "Preventas" },
  { href: "/ordenes", label: "Órdenes" },
  { href: "/calendario", label: "Calendario" },
  { href: "/reportes", label: "Reportes" },
  { href: "/chat", label: "Chat IA" },
];

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims || data.claims.email !== AUTHORIZED_EMAIL) {
    redirect("/login");
  }

  const email = data.claims.email ?? "Usuario";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="border-b border-slate-800 bg-slate-900/95 lg:min-h-screen lg:w-72 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between border-b border-slate-800 px-5 py-5 lg:block">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-400">
                CC Admin
              </p>
              <h2 className="mt-2 text-xl font-bold text-white">Panel privado</h2>
            </div>
          </div>

          <nav className="flex gap-2 overflow-x-auto px-3 py-4 lg:flex-col lg:overflow-visible lg:px-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-500/50 hover:bg-slate-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="border-b border-slate-800 bg-slate-900/80 px-4 py-4 backdrop-blur-sm sm:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Colombia • COP • America/Bogota
                </p>
                <h1 className="mt-1 text-2xl font-bold text-white">CC Admin</h1>
              </div>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <div className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1.5 text-sm text-cyan-200">
                  {email}
                </div>

                <form action="/auth/signout" method="post">
                  <button
                    type="submit"
                    className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-700"
                  >
                    Cerrar sesión
                  </button>
                </form>
              </div>
            </div>
          </header>

          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
