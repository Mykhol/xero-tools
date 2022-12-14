import { XeroService } from "../lib/xero/XeroService";

export const xeroService = new XeroService(
  process.env.XERO_CLIENT_ID!,
  process.env.XERO_SECRET!,
  ["http://localhost:3000/api/xero/callback"],
  ["openid", "profile", "email", "accounting.settings"]
);
