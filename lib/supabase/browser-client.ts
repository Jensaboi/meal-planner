import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublicKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY;

  if (!supabaseUrl || !supabasePublicKey)
    throw new Error("Missing supabase .env varibles");

  return createBrowserClient(supabaseUrl, supabasePublicKey);
}
