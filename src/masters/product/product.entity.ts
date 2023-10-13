import { Entity, Column, ObjectId, ObjectIdColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity('Product')
export class Product {
  @ObjectIdColumn() id: ObjectId;
  @Column() ProductName: string;
  @Column() Price: number;
  @Column() CategoryId: number;
  @Column() ManufactureDate: string;
}

export class ProductDTO {
  
    @ApiProperty()
    ProductName: string;
  
    @ApiProperty()
    Price: number;
  
    @ApiProperty()
    CategoryId: number;
    @ApiProperty()
    ManufactureDate: string;
  }