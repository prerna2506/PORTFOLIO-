const normalizedAdminEmail = (process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "").trim().toLowerCase();

export function isConfiguredAdminEmail(email?: string | null): boolean {
  if (!email || !normalizedAdminEmail) {
    return false;
  }

  return email.trim().toLowerCase() === normalizedAdminEmail;
}

export async function verifyAdminAccess(accessToken?: string): Promise<boolean> {
  if (!accessToken) {
    return false;
  }

  try {
    const response = await fetch("/api/admin/check", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return false;
    }

    const data = (await response.json()) as { authorized?: boolean };
    return Boolean(data.authorized);
  } catch {
    return false;
  }
}

export async function clearAdminAccessCookie(): Promise<void> {
  try {
    await fetch("/api/admin/check", {
      method: "DELETE",
      cache: "no-store",
    });
  } catch {
    // Client sign-out still proceeds even if cookie clearing fails.
  }
}
