"use server";

import { signOutUser } from "@/lib/api/supabaseApi";
import { redirect } from "next/navigation";

export default async function signOutAction() {
  const { error } = await signOutUser();

  return redirect("/");
}
