import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {validateOrReject } from 'class-validator';

@Entity({ name: 'companyInfomations' })
export class CompanyContact extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 255, name: 'name' })
  name: string;

  @Column({ type: 'varchar', length: 255, name: 'logo' })
  logo: string;

  @Column({ type: 'text', nullable: true, name: 'slogan' })
  slogan: string;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'address' })
  address?: string;
  
  @Column({ type: 'varchar', length: 255, nullable: true, name: 'taxNumber' })
  taxNumber?: string;

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
