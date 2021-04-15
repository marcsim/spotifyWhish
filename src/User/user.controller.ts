import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { AddUserDTO } from './dto/add-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './models/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Post('/addUser')
  async createUser(@Body() addUserDTO: AddUserDTO) {
    return this.UserService.createUser(addUserDTO);
  }
  @Get('/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.UserService.getUserById(id);
  }

  @Get()
  async getAllUsers() {
    return this.UserService.getAllUsers();
  }

  @Delete(':id')
  async deleteUserById(@Param() params) {
    return this.UserService.deleteUserById(params.id);
  }

  @Patch('/:id')
  //@UsePipes(Validator)
  updatePasswordById(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    UpdateUserDTO: UpdateUserDTO,
  ) {
    return this.UserService.updateUser(UpdateUserDTO);
  }
}
