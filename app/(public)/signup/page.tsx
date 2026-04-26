"use client";
import signUpAction from "@/features/auth/signUpAction";
import Link from "next/link";
import { useActionState } from "react";

export default function SignUp() {
  const [state, formAction, isPending] = useActionState(signUpAction);

  return (
    <section>
      <form
        action={formAction}
        className="rounded-lg shadow-xl max-w-120 mx-auto mt-20 p-8 py-16 gap-4 flex flex-col"
      >
        <h1 className="text-2xl font-bold mb-6">Sign up</h1>

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
          {isPending ? "Signing up..." : "Sign up"}
        </button>
        <p>
          Already have an account?{" "}
          <Link className="hover:underline" href={"/signin"}>
            Sign in here!
          </Link>
        </p>
      </form>
    </section>
  );
}
