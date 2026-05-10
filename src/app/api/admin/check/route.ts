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

function jsonUnauthorized(message = "Unauthorized") {
  const response = NextResponse.json(
    {
      authorized: false,
      error: message,
    },
    { status: 401 }
  );

  response.cookies.delete(ADMIN_COOKIE_NAME);

  return response;
}

export async function POST(request: Request) {
  try {
    const body =
      (await request.json().catch(() => ({}))) as AdminCheckBody;

    let accessToken = body.accessToken;

    // ALSO SUPPORT AUTHORIZATION HEADER
    if (!accessToken) {
      const authHeader = request.headers.get("authorization");

      if (authHeader?.startsWith("Bearer ")) {
        accessToken = authHeader.replace("Bearer ", "");
      }
    }

    if (!accessToken) {
      return jsonUnauthorized("Missing access token");
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey =
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return jsonUnauthorized("Missing Supabase env variables");
    }

    const supabase = createClient(
      supabaseUrl,
      supabaseAnonKey
    );

    const { data, error } =
      await supabase.auth.getUser(accessToken);

    if (error || !data.user) {
      console.error("Supabase auth error:", error);

      return jsonUnauthorized("Invalid user");
    }

    const authorized = isAdminIdentity({
      email: data.user.email,
      role:
        (data.user.app_metadata?.role as string | undefined) ??
        (data.user.user_metadata?.role as string | undefined),
    });

    if (!authorized) {
      return jsonUnauthorized("Not admin");
    }

    const response = NextResponse.json({
      authorized: true,
      user: {
        email: data.user.email,
      },
    });

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
  } catch (err) {
    console.error("ADMIN CHECK ERROR:", err);

    return jsonUnauthorized("Server error");
  }
}

export async function DELETE() {
  const response = NextResponse.json({
    cleared: true,
  });

  response.cookies.delete(ADMIN_COOKIE_NAME);

  return response;
}