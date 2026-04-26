import { signUpUser } from "@/lib/api/supabaseApi";
import { redirect } from "next/navigation";

export default async function signUpAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email && !password) return { error: "Both fields are required." };
  if (!email) return { error: "Invalid email input" };
  if (!password) return { error: "Invalid password input" };

  const { success, data, error } = await signUpUser({ email, password });

  if (!success && error) return { success, error };

  if (success && data) return redirect("/dashboard");
}
