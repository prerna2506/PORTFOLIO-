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

export async function verifyAdminAccess(
  accessToken?: string
): Promise<boolean> {
  if (!accessToken) {
    console.log("NO ACCESS TOKEN");
    return false;
  }

  console.log("TOKEN EXISTS");

  try {
    const response = await fetch("/api/admin/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
      body: JSON.stringify({
        accessToken,
      }),
      cache: "no-store",
    });

    console.log("STATUS:", response.status);

    if (!response.ok) {
      return false;
    }

    const data = await response.json();

    console.log("DATA:", data);

    return Boolean(data.authorized);
  } catch (err) {
    console.error(err);
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
