import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {validateOrReject } from 'class-validator';
import { AppDataSource } from '../utils/db';

@Entity({ name: 'categories' })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'category_id' })
  categoryId: number;

  @Column({ type: 'varchar', unique: true, length: 255, name: 'name' })
  name: string;

  @Column({ unique: true, type: 'varchar', length: 255, name: 'slug' })
  slug?: string;

  @CreateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP", name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP", nullable: true, onUpdate: "CURRENT_TIMESTAMP", name: 'updated_at' }) // Dùng snake_case
  updatedAt?: string;

  @DeleteDateColumn({ nullable: true, name: 'deleted_at' })
  deletedAt?: string;

  static async isNameExist(name: string): Promise<boolean> {
    const repo = AppDataSource.getRepository(Category);
    const existing = await repo
      .createQueryBuilder('product')
      .where('product.name = :name', { name })
      .getOne();

    return !!existing;
  }

  static async isSlugExist(slug: string): Promise<boolean> {
    const repo = AppDataSource.getRepository(Category);
    const existing = await repo
      .createQueryBuilder('product')
      .where('product.slug = :slug', { slug })
      .getOne();

    return !!existing;
  }

  // HOOKS (AUTO VALIDATE)
  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }
}
