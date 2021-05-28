import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AddUserDTO } from './dto/add-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { JwtPayload } from '../config/jwt.strategy';
import { User } from './models/user.entity';
import { UserRepository } from './repository/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async createUser(addUserDTO: AddUserDTO) {
    return await this.userRepository.createUser(addUserDTO);
  }

  async login(mail: string, password: string) {
    const found = await this.userRepository.findOne({ mail });
    console.log('found', found);
    if (!found) {
      throw new BadRequestException('invalid username');
    }

    if (!(await bcrypt.compare(password, found.password))) {
      throw new BadRequestException('invalid password');
    }
    const payload: JwtPayload = { username: found.mail, id: found.id };
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
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
    //await this.userRepository.deleteUser(await this.getUserById(id));
  }
}
