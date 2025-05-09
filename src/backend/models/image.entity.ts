import { BaseEntity, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {validateOrReject } from 'class-validator';
import { Product } from './product.entity';

@Entity({ name: 'images' })
export class Image extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'image_id' })
  imageId: number;

  @Column({ type: 'boolean', nullable: true, name: 'cover' })
  cover: boolean;

  @Column({ unique: true, type: 'varchar', length: 255, name: 'url' })
  url?: string;

  @Column({ type: 'int', name: 'product_id' })
  productId?: string;

  @ManyToOne(() => Product, (p) => p.images, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' }) // Liên kết khóa ngoại
  product: Product;

  // HOOKS (AUTO VALIDATE)
  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }
}
