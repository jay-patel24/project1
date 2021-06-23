/* eslint-disable */

import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string = uuid();

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  contact: number;
}
