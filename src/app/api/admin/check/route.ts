import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const adminEmail = (process.env.ADMIN_EMAIL ?? process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "")
  .trim()
  .toLowerCase();
const adminCookieName = "portfolio_admin";

function setAdminCookie(response: NextResponse, authorized: boolean) {
  if (authorized) {
    response.cookies.set(adminCookieName, "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 12,
    });
    return response;
  }

  response.cookies.set(adminCookieName, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}

function unauthorized() {
  return setAdminCookie(NextResponse.json({ authorized: false }, { status: 401 }), false);
}

export async function POST(request: Request) {
  if (!supabaseUrl || !supabaseAnonKey || !adminEmail) {
    return setAdminCookie(
      NextResponse.json(
        { authorized: false, message: "Admin access is not configured." },
        { status: 500 },
      ),
      false,
    );
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return unauthorized();
  }

  const token = authHeader.slice("Bearer ".length).trim();
  if (!token) {
    return unauthorized();
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);

  if (error || !user?.email) {
    return unauthorized();
  }

  const authorized = user.email.toLowerCase() === adminEmail;
  return setAdminCookie(NextResponse.json({ authorized }), authorized);
}

export async function DELETE() {
  return setAdminCookie(NextResponse.json({ ok: true }), false);
}
