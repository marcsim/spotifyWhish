import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AddUserDTO } from './dto/add-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { AuthUser } from './get-user.decorator';
import { User } from './models/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Post('/signin')
  async signIn(@Body() addUserDTO: AddUserDTO) {
    return this.UserService.createUser(addUserDTO);
  }

  @Post('/login')
  async login(@Body() user: User) {
    console.log('mail, password', user.mail, user.password);
    return this.UserService.login(user.mail, user.password);
  }

  @Get('/profile')
  @UseGuards(AuthGuard('jwt'))
  async getProfile(@AuthUser() user: User): Promise<User> {
    return this.UserService.getUserById(user.id);
  }
  //Activer si user = admin
  @Get()
  async getAllUsers() {
    return this.UserService.getAllUsers();
  }

  @Delete('/profile/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteProfile(@AuthUser() user: User) {
    return this.UserService.deleteUserById(user.id);
  }

  @Patch('/update/:id')
  @UseGuards(AuthGuard('jwt'))
  //@UsePipes(Validator)
  updatePasswordById(
    //@AuthUser() user: User,
    @Param('id', ParseIntPipe) id: number,
    @Body()
    UpdateUserDTO: UpdateUserDTO,
  ) {
    return this.UserService.updateUser(UpdateUserDTO);
  }
}
