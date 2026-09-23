"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type FormState = {
  error?: string;
  success?: string;
};

function getCredentials(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return {
      email,
      password,
      error: "Debes ingresar email y contraseña.",
    };
  }

  return { email, password, error: undefined };
}

export async function login(
  _prevState: FormState | null,
  formData: FormData,
): Promise<FormState> {
  const { email, password, error } = getCredentials(formData);

  if (error) {
    return { error };
  }

  const supabase = await createClient();
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError) {
    return { error: signInError.message };
  }

  redirect("/");
}

export async function register(
  _prevState: FormState | null,
  formData: FormData,
): Promise<FormState> {
  const { email, password, error } = getCredentials(formData);

  if (error) {
    return { error };
  }

  const supabase = await createClient();
  const { error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    return { error: signUpError.message };
  }

  return {
    success:
      "Cuenta creada. Si la confirmación por email está habilitada, revisa tu bandeja de entrada antes de iniciar sesión.",
  };
}
