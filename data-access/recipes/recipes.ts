import { createClient } from "@/lib/supabase/server-client";

export async function getRecipes() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("recipes").select();

  if (error) throw new Error(error.message);

  return data;
}
