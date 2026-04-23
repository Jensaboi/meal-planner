import { redirect } from "next/navigation";

export default function Layout({ children }) {
  if (true) redirect("/");

  return <div>{children}</div>;
}
