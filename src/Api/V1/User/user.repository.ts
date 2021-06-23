import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository, Repository } from 'typeorm';
import User from './User.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  constructor() {
    super();
  }

  async findAll(): Promise<User[]> {
    return await this.find();
  }
}
