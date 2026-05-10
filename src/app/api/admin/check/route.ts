import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import {
  ADMIN_COOKIE_MAX_AGE_SECONDS,
  ADMIN_COOKIE_NAME,
  isAdminIdentity,
} from "@/lib/admin-server";

type AdminCheckBody = {
  accessToken?: string;
};

function jsonUnauthorized() {
  const response = NextResponse.json({ authorized: false }, { status: 401 });
  response.cookies.delete(ADMIN_COOKIE_NAME);
  return response;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as AdminCheckBody;
  const accessToken = body.accessToken;

  if (!accessToken) {
    return jsonUnauthorized();
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return jsonUnauthorized();
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { data, error } = await supabase.auth.getUser(accessToken);

  if (error || !data.user) {
    return jsonUnauthorized();
  }

  const authorized = isAdminIdentity({
    email: data.user.email,
    role:
      (data.user.app_metadata?.role as string | undefined) ??
      (data.user.user_metadata?.role as string | undefined),
  });

  if (!authorized) {
    return jsonUnauthorized();
  }

  const response = NextResponse.json({ authorized: true });
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: "1",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ADMIN_COOKIE_MAX_AGE_SECONDS,
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ cleared: true });
  response.cookies.delete(ADMIN_COOKIE_NAME);
  return response;
}
