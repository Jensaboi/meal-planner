import { getUser } from "@/features/user/user.data";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (user) return children;

  return redirect("/signin");
}
