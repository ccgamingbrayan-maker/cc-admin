"use client";

import { useActionState } from "react";
import { login, register, type FormState } from "./actions";

const initialState: FormState = {};

export default function LoginPage() {
  const [loginState, loginAction, isLoggingIn] = useActionState(
    login,
    initialState,
  );
  const [registerState, registerAction, isRegistering] = useActionState(
    register,
    initialState,
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10 text-slate-100">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/60 backdrop-blur-sm sm:p-8">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            CC Admin
          </p>
          <h1 className="mt-3 text-3xl font-bold text-white">Acceso privado</h1>
          <p className="mt-2 text-sm text-slate-400">
            Inicia sesión para administrar la tienda de cartas coleccionables.
          </p>
        </div>

        <form action={loginAction} className="space-y-4">
          <div>
            <label htmlFor="login-email" className="mb-1 block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="admin@tu-tienda.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
            />
          </div>

          <div>
            <label htmlFor="login-password" className="mb-1 block text-sm font-medium text-slate-300">
              Contraseña
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
            />
          </div>

          {loginState?.error ? (
            <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
              {loginState.error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoggingIn ? "Entrando..." : "Iniciar sesión"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
          <div className="h-px flex-1 bg-slate-700" />
          <span>o</span>
          <div className="h-px flex-1 bg-slate-700" />
        </div>

        <form action={registerAction} className="space-y-4">
          <div>
            <label htmlFor="register-email" className="mb-1 block text-sm font-medium text-slate-300">
              Crear cuenta
            </label>
            <input
              id="register-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="nuevo-admin@tu-tienda.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
            />
          </div>

          <div>
            <label htmlFor="register-password" className="mb-1 block text-sm font-medium text-slate-300">
              Contraseña
            </label>
            <input
              id="register-password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Mínimo 6 caracteres"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/30"
            />
          </div>

          {registerState?.error ? (
            <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
              {registerState.error}
            </p>
          ) : null}

          {registerState?.success ? (
            <p className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
              {registerState.success}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isRegistering}
            className="w-full rounded-xl border border-violet-500/50 bg-violet-500/10 px-4 py-2.5 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/20 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isRegistering ? "Creando..." : "Crear cuenta"}
          </button>
        </form>
      </div>
    </main>
  );
}
