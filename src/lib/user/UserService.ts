import { DynamoDbService } from "../aws/DynamoDbService";
import { User } from "./User";

export class UserService extends DynamoDbService<User> {}
