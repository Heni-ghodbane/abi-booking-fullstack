import { Injectable } from "@nestjs/common";
import { User } from "./user";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {}

  public getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public get(id: string): Promise<User | void> {
    return this.userRepository.findOne(id);
  }

  public delete(id: string): Promise<any> {
    return this.userRepository.delete({ id });
  }

  public getUsersByLastName(lastName: string): Promise<User[]> {
    return this.userRepository.find(
      { where:
          { lastName: lastName }
      }
    );
  }
}
