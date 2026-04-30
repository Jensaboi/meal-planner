import { createClient } from "@/lib/supabase/server-client";

export async function getMeals() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("meals").select();

  if (error) throw new Error(error.message);

  return data;
}
