// require('dotenv').config();
import * as dotenv from "dotenv";
dotenv.config();
import 'reflect-metadata';

import { DataSource } from 'typeorm';

// import { Category } from './entities/category.entity';
// import { User } from './entities/user.entity';
// import { OrderDetail } from './entities/orderDetail.entity';
// import { Order } from './entities/order.entity';
// import { Product } from './entities/product.entity';
// import { Supplier } from './entities/supplier.entity';
// import { Cart } from './entities/cart.entity';
// import { District } from './entities/district.entity';
// import { Image } from './entities/image.entity';
// import { Promotion } from './entities/promotion.entity';
// import { PromotionDetail } from './entities/promotionDetail.entity';
// import { Province } from './entities/province.entity';
// import { Size } from './entities/size.entity';
// import { Status } from './entities/status.entity';
// import { Table } from './entities/table.entity';
// import { Ward } from './entities/ward.entity';
// import { ProductSize } from './entities/productSize.entity';
// import { ResetPassword } from './entities/resetPassword.entity';
// import { ActivateUser } from './entities/activateUser.entity';
// import {BankInformation} from './entities//bankInfomation.entity'
// import { BankHistory } from "./entities/bankHistory.entity";


// import { checkCartsUnique } from './migrations/triggers/checkCartsUnique';
// import { join } from 'path';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.PGHOST || 'localhost',
  // url: process.env.POSTGRES_URL, // Lấy URL từ biến môi trường
  ssl: false, // Sử dụng SSL
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  //  requestTimeout: 60000,
  // entities: ['entities/*.entity{.ts,.js}'],
  migrations: ["src/migrations/**/*.ts"],
  entities: [
    // Cart,
    // Status, 
    // Category, 
    // Supplier, 
    // Product, 
    // Image, 
    // Size, 
    // ProductSize, 
    // Ward, 
    // District, 
    // Province, 
    // Table, 
    // User, 
    // Promotion, 
    // PromotionDetail, 
    // Order, 
    // OrderDetail, 
    // ResetPassword, 
    // ActivateUser,
    // BankInformation,
    // BankHistory
  ],
  // migrations: [
  //   // join(__dirname, '**', '*.\.{ts,js}')
  //   // "src/migrations/**/*.ts"
  //   'dist/**/*.entity.ts'
  // ],
  synchronize: false,
  logging: false,
  extra: {
    trustServerCertificate: true,
  }
});

export async function initializeDB() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log('✅ DB connected');
  }
}