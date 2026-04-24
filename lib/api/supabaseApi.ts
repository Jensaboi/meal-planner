import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_PUBLIC_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY;

if (!SUPABASE_URL)
  throw new Error(`Error: Missing .env varible SUPABASE_URL: ${SUPABASE_URL}`);
if (!SUPABASE_PUBLIC_KEY)
  throw new Error("Error: Missing .env varible: SUPABASE_PUBLIC_KEY");

console.log(SUPABASE_URL);
// Create a single supabase client for interacting with your database
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);

export async function getUser() {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.error(`Supabase auth error: ${error.message}`);
      return { success: false, error: error.message };
    }

    if (data && !error) return { success: true, data };
  } catch (error) {
    console.error(`Unexpected error: ${error.message}`);
  }
}

export async function signUpUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error(`Supabase sign up error: ${error.message}`);
      return { success: false, error: error.message };
    }

    if (data && !error) return { success: true, data };
  } catch (error) {
    console.error(`Unexpected error: ${error.message}`);
  }
}

export async function signInUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(`Supabase sign in error: ${error.message}`);
      return { success: false, error: error.message };
    }

    if (data && !error) return { success: true, data };
  } catch (error) {
    console.error(`Unexpected error: ${error.message}`);
  }
}

export async function signOutUser() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(`Supabase sign out error: ${error.message}`);
      return { success: false, error: error.message };
    }

    if (!error) return { success: true };
  } catch (error) {
    console.error(`Unexpected error: ${error.message}`);
  }
}
