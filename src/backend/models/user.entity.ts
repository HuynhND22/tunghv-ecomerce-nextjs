import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {validateOrReject } from 'class-validator';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  userId: number;

  @Column({ type: 'varchar', length: 255, name: 'full_name' })
  fullName: string;

  @Column({ unique: true, type: 'varchar', length: 255, name: 'email' })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'password' })
  password: string;

  @Column({ unique: true, type: 'varchar', length: 15, nullable: true, name: 'phone_number' })
  phoneNumber?: string;

  @CreateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP", name: 'created_at' }) // Dùng snake_case
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP", nullable: true, onUpdate: "CURRENT_TIMESTAMP", name: 'updated_at' }) // Dùng snake_case
  updatedAt?: string;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' }) // Dùng snake_case
  deletedAt?: string;


  // HOOKS (AUTO VALIDATE)
  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }
}
