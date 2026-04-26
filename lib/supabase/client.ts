import { createBrowserClient } from "@supabase/ssr";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_PUBLIC_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY;

if (!SUPABASE_URL)
  throw new Error(`Error: Missing .env varible SUPABASE_URL: ${SUPABASE_URL}`);
if (!SUPABASE_PUBLIC_KEY)
  throw new Error("Error: Missing .env varible: SUPABASE_PUBLIC_KEY");

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}
