import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export function getSupabaseCredentials() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublicKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY;

  if (!supabaseUrl || !supabasePublicKey)
    throw new Error(
      `Error: Missing .env varible NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLIC_KEY.`,
    );

  return { supabaseUrl, supabasePublicKey };
}

export async function createClient() {
  const { supabaseUrl, supabasePublicKey } = getSupabaseCredentials();
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabasePublicKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet, _headers) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch (err) {
          console.error("Failed to set cookies:", err);
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
}
