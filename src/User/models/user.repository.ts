import { EntityRepository, Repository } from 'typeorm';
import { AddUserDTO } from '../dto/add-user.dto';
import { UpdateUserDTO } from '../dto/update-user.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(addUserDTO: AddUserDTO): Promise<User> {
    const { mail, password } = addUserDTO;
    const user = new User();
    user.mail = mail;
    user.password = password;
    return await user.save();
  }

  async updateUser(user: User, UpdateUserDTO: UpdateUserDTO): Promise<User> {
    user.password = UpdateUserDTO.password;
    return await user.save();
  }

  async deleteUser(user: User): Promise<User> {
    return await user.remove();
  }
}
