import { XeroService } from "../lib/xero/XeroService";
import { DynamoDbService } from "../lib/aws/DynamoDbService";
import { UserService } from "../lib/user/UserService";
import { UserRepo } from "../lib/user/UserRepo";

export const xeroService = new XeroService(
  process.env.XERO_CLIENT_ID!,
  process.env.XERO_CLIENT_SECRET!,
  ["http://localhost:3000/api/xero/callback"],
  ["openid", "profile", "email", "accounting.settings", "offline_access"]
);
const userService = new UserService(
  process.env.AWS_REGION!,
  process.env.AWS_ACCESS_KEY_ID!,
  process.env.AWS_SECRET_ACCESS_KEY!,
  "xero_tools_users"
);

export const userRepo = new UserRepo(userService);
