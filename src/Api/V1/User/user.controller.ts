/* eslint-disable */

import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
//import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //get all users
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  //create new user
  @Post()
  createUser() {
    return 'create new user';
  }
}
