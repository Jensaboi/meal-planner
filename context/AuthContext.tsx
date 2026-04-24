"use client";
import { supabase } from "@/lib/api/supabaseApi";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [session, setSession] = useState(null);

  const { data } = supabase.auth.onAuthStateChange((event, session) => {
    if (event === "INITIAL_SESSION") {
      // handle initial session
    } else {
      // handle other sessions
      setSession(session);
    }
  });

  const user = session?.user ?? null;

  return (
    <AuthContext.Provider value={{ session, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
