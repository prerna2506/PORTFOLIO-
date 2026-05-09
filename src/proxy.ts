import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const adminCookieName = "portfolio_admin";

export function proxy(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  if (!isAdminRoute) {
    return NextResponse.next();
  }

  const hasAdminGate = request.cookies.get(adminCookieName)?.value === "1";
  if (hasAdminGate) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/admin/:path*"],
};
