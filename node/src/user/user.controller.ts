import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param
} from "@nestjs/common";
import { User } from "./user";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  public async getUsers(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get(":id")
  public async getUserById(@Param("id") id: string): Promise<User | void> {
    const user = this.userService.get(id);
    if (!user) {
      throw new HttpException("User not found.", HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Get("delete/:id")
  public async deleteUserById(@Param("id") id: string): Promise<any> {
    const result = this.userService.delete(id);
    if (!result) {
      throw new HttpException("cannot delete this user", HttpStatus.EXPECTATION_FAILED);
    }
    return true;
  }

  @Get("findByName/:lastName")
  public async getUsersByName(@Param("lastName") lastName: string): Promise<User[]> {
    const users = this.userService.getUsersByLastName(lastName);
    if (!(await users).length) {
      throw new HttpException("User not found.", HttpStatus.NOT_FOUND);
    }
    return users;
  }
}
