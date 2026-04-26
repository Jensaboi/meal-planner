import { getUser } from "@/lib/api/supabaseApi";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { success, user } = await getUser();

  if (success && user) return NextResponse.redirect(request.url);

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/discover/:path*",
    "/meals/:path*",
    "/ingredients/:path*",
  ],
};
