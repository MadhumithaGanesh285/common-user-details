// src/services/UserService.ts
import { User } from "../interfaces/User";

export class UserService {
  static async getUser(id: string): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    return {
      id: data.id,
      name: data.name,
      email: data.email,
      avatar: `https://i.pravatar.cc/150?img=${data.id}`,
    };
  }
}
