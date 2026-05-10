type AdminCheckResponse = {
  authorized: boolean;
};

async function parseAdminResponse(response: Response): Promise<boolean> {
  if (!response.ok) {
    return false;
  }

  const payload = (await response.json()) as AdminCheckResponse;
  return payload.authorized === true;
}

export async function verifyAdminAccess(accessToken?: string) {
  if (!accessToken) {
    return false;
  }

  try {
    const response = await fetch("/api/admin/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken }),
      cache: "no-store",
    });

    return await parseAdminResponse(response);
  } catch {
    return false;
  }
}

export async function clearAdminAccessCookie() {
  try {
    await fetch("/api/admin/check", {
      method: "DELETE",
      cache: "no-store",
    });
  } catch {
    // no-op: best effort cookie cleanup
  }
}
