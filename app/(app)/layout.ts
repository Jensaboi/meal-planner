import { createClient } from "@/lib/supabase/server-client";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({ children }) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("server user:", user);

  if (user) return children;

  return redirect("/signin");
}
