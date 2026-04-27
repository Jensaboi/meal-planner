//client-side supabase client
import { createClient } from "../supabase/browser-client";

export async function signUpUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      console.error(`Supabase sign-up error: ${error.message}`);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error(`Unexpected supabase error: ${error.message}`);
    return { success: false, error: error.message };
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
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(`Supabase sign-in error: ${error.message}`);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error(`Unexpected supabase error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

export async function signOutUser() {
  try {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(`Supabase sign-out error: ${error.message}`);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error(`Unexpected supabase error: ${error.message}`);
    return { success: false, error: error.message };
  }
}
