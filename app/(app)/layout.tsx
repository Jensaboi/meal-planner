import { getUser } from "@/lib/api/supabaseApi";
import { redirect } from "next/navigation";

export default async function ProtectedRouteLayout({ children }) {
  const { success, data, error } = await getUser();

  if (success && data) return children;

  return redirect("/");
}
