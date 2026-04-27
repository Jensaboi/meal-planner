"use client";
import Link from "next/link";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { signInUser } from "@/lib/api/supabaseApi";

export default function SignIn() {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(async (_, formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    const { success, error, data } = await signInUser({ email, password });

    if (success && data) {
      router.push("/dashboard");
    }

    if (!success && error) {
      return { error: error.message };
    }
  }, null);

  return (
    <section>
      <form
        action={formAction}
        className="rounded-lg shadow-xl max-w-120 mx-auto mt-20 p-8 py-16 gap-4 flex flex-col"
      >
        <h1 className="text-2xl font-bold mb-6">Sign in</h1>
        {state?.error && <p className="text-red-500">{state.error}</p>}
        <div className="flex flex-col gap-2">
          <label className="font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="p-1 border border-zinc-600 rounded-md"
            required
            type="text"
            id="email"
            name="email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium" htmlFor="password">
            Password
          </label>
          <input
            className="p-1 border border-zinc-600 rounded-md"
            required
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button disabled={isPending} className="primary-btn mt-6">
          {isPending ? "Signing in..." : "Sign in"}
        </button>

        <p>
          Dont have an account?
          <Link className="ml-2 hover:underline" href={"/signup"}>
            Sign up here
          </Link>
        </p>
      </form>
    </section>
  );
}
