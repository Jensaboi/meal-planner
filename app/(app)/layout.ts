import { getUser } from "@/data-access/user/user";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({ children }) {
  const user = await getUser();

  if (user) return children;

  return redirect("/signin");
}
