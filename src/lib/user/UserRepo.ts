import { UserService } from "./UserService";
import { User } from "./User";

export class UserRepo {
  constructor(private service: UserService) {}

  async addUser(user: User) {
    return await this.service.addItem(user);
  }
}
