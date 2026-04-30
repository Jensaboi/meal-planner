import { createClient } from "@/lib/supabase/server-client";

export async function getUser() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) return user;

  return null;
}
