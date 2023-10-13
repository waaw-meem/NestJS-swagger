import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MastersModule} from './masters/masters.module'
import { ProductController } from './masters/product/product.controller';
import { CategoryController } from './masters/category/category.controller';
import { ProductService } from './masters/product/product.service';


@Module({
  imports: [MastersModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/ProductStore',
      database: 'ProductStore',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
