export const ADMIN_COOKIE_NAME = "portfolio_admin";

export const ADMIN_COOKIE_MAX_AGE_SECONDS =
  60 * 60 * 24 * 7;

const ADMIN_EMAILS = [
  "prernas278@gmail.com",
];

type AdminIdentity = {
  email?: string | null;
  role?: string | null;
};

export function isAdminIdentity({
  email,
}: AdminIdentity): boolean {
  if (!email) {
    return false;
  }

  return ADMIN_EMAILS.includes(
    email.toLowerCase()
  );
}
