import { createClient } from "@/lib/supabase/server-client";
import { Meal } from "./meal.type";

export async function getMeals(): Promise<Meal[]> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("meals").select();

  if (error) throw new Error(error.message);

  return data;
}
