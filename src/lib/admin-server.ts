export const ADMIN_COOKIE_NAME = "portfolio_admin";
export const ADMIN_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

const normalize = (value: string) => value.trim().toLowerCase();

export function getAdminEmailsFromEnv() {
  const raw = process.env.ADMIN_EMAILS ?? "";
  return raw
    .split(",")
    .map(normalize)
    .filter(Boolean);
}

type AdminIdentity = {
  email?: string | null;
  role?: string | null;
};

export function isAdminIdentity({ email, role }: AdminIdentity) {
  const normalizedRole = (role ?? "").toLowerCase();
  if (normalizedRole === "admin") {
    return true;
  }

  const normalizedEmail = normalize(email ?? "");
  if (!normalizedEmail) {
    return false;
  }

  const adminEmails = getAdminEmailsFromEnv();
  return adminEmails.includes(normalizedEmail);
}
