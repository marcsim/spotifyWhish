import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddUserDTO } from './dto/add-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './models/user.entity';
import { UserRepository } from './models/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async createUser(addUserDTO: AddUserDTO) {
    return await this.userRepository.createUser(addUserDTO);
  }

  async getUserById(id: number): Promise<User> {
    const found = await this.userRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return found;
  }

  async getAllUsers(): Promise<User[]> {
    const found = await this.userRepository.find();
    if (!found) {
      throw new NotFoundException(`User not found`);
    }
    return found;
  }

  async updateUser(UpdateUserDTO: UpdateUserDTO) {
    const found = this.getUserById(UpdateUserDTO.id);
    return await this.userRepository.updateUser(await found, UpdateUserDTO);
  }

  async deleteUserById(id: number): Promise<User> {
    const found = await this.userRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    } else {
      await this.userRepository.deleteUser(found);
      return found;
    }
    //await this.songRepository.deleteSong(await this.getSongById(id));
  }
}
