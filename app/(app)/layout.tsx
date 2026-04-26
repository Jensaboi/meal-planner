import { getUser } from "@/lib/api/supabaseApi";
import { redirect } from "next/navigation";

export default async function ProtectedRouteLayout({ children }) {
  try {
    return children;
  } catch (err) {
    return redirect("/");
  }
}
