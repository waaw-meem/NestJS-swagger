import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product, ProductDTO } from './product.entity';
import { ApiOperation, ApiBody } from '@nestjs/swagger';

@Controller('Product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('GetAllProduct')
  getAllProducts() {
    return this.productService.getAllProducts();
  }
  @Get('GetProductById/:id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id)
;
  }
  
  @Get('GetProductByName/:name')
  getProductByName(@Param('name') name: string) {
    return this.productService.getProductByName(name);
  }

  @Post('PostProduct')
  @ApiOperation({ summary: 'Create a new product' })
  @ApiBody({ type: ProductDTO })
  postProduct(@Body() body: Product): any {
    return this.productService.postProduct(body);
  }

  @Put('UpdateProduct/:id')
  @ApiBody({ type: ProductDTO })
  updateProduct(@Param('id') productId: string, @Body() body: Product) {
    return this.productService.postProduct({ id: productId , ...body });
  }

  @Delete('DeleteProduct/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id)
;
  }
}