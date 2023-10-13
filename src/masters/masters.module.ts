import { Module } from '@nestjs/common';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
 import { Product } from './product/product.entity';
import { CategoryController } from './category/category.controller';
// import { CategoryService } from './category/category.service';
// import { Category } from './category/category.entity';


@Module({
  controllers: [ProductController, CategoryController],
  providers: [ProductService],
  imports: [TypeOrmModule.forFeature([Product])],

 
})
export class MastersModule {}