import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Like, MongoRepository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: MongoRepository<Product>,
  ) {}

  async getAllProducts() {
    return await this.productRepo.find();
  }
  async getProductById(id)
 {
    let _result = await this.productRepo.findOneBy({
      where: { _id: new ObjectId(id)
 },
    });
    return _result;
  }
  async getProductByName(contains: string): Promise<Product[]> {
    const products = await this.productRepo.find({
      where: {
        ProductName: {$regex: contains, // Use a regex to match partial strings
        $options: 'i', 
      },
    },
    });
    return products;
  }

  async postProduct(body: Product) {
    if (!body.id) {
      return await this.productRepo.save(body);
    } else {
      let _result = await this.productRepo.update(body.id, body);
      return _result;
    }
  }
  async deleteProduct(id: string) {
    try {
      const objectId = new ObjectId(id)
;
      const result = await this.productRepo.deleteOne({ _id: objectId });
      if (result.deletedCount === 1) {
        return { message: 'Product deleted successfully' };
      } else {
        throw new Error('Product not found');
      }
    } catch (error) {
      throw new Error('Failed to delete product');
    }
  }
}