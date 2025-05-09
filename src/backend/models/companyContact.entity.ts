import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {validateOrReject } from 'class-validator';

@Entity({ name: 'companyContacts' })
export class companyContact extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 255, name: 'name' })
  name: string;

  @Column({ type: 'varchar', length: 255, name: 'value' })
  value: string;

  @Column({ type: 'text', nullable: true, name: 'link' })
  link: string;
  
  @Column({ type: 'text', nullable: true, name: 'icon' })
  icon: string;

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
